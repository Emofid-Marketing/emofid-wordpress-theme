import DataStore from "../store/Data";

async function getDataSet(period, risk, value, refetch) {

  const distribution = [];

  const results = [];


  async function fetchData() {
    let res = await fetch(
      `https://sn.emofid.com/investmentsimulator/investing/?period=${period}&risk=${risk}&value=${value}&format=json`
    );
    res = await res.json();
    DataStore.setFetchedData(res);
    return res;
  }

  function calcReferenceDate() {
    const today = new Date();
    const year = today.getFullYear() - DataStore.period;
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    const referenceDate = `${year}-${month}-${day}`;

    return referenceDate;
  }

  function calcRelativeValue(data, currentValue, referenceDate) {

    const referenceData = data.find(o => o.date === referenceDate);

    let relativeValue = (currentValue / referenceData.value) * DataStore.value;

    return relativeValue;
  }

  function organizeData(data) {
    const newData = [];
    const refData = calcReferenceDate();

    data.forEach((item) => {
      const thisDate = item.date.split("-");
      const datex = Date.UTC(thisDate[0], thisDate[1] - 1, thisDate[2]);

      const relativeValue = calcRelativeValue(data, item.value, refData);

      newData.push({
        x: datex,
        y: relativeValue,
      });
    });

    return newData;
  }

  let onlineData;

  if (refetch) {
    onlineData = await fetchData();
  } else {
    onlineData = DataStore.fetchedData;
  }


  DataStore.setReturn(onlineData.return);

  onlineData.distribution.forEach((item) => {
    distribution.push([
      item.name,
      item.percent
    ]);
  });

  DataStore.setDistribution(distribution);

  DataStore.activeSeries.forEach((dataSet) => {
    const thisDataSet = onlineData.data.find(o => o.id === dataSet.id);
    results.push({
      name: thisDataSet.name,
      data: organizeData(thisDataSet.prices)
    })
  });

  DataStore.setLoading(false);

  return results;
}

export default getDataSet;
