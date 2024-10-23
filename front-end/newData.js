export const Data = [
  {
    name: "Monday",
    Fire: 1,
    Medical: 5,
    Crime: 4,
    Natural: 8,
    Biological: 0,
    Utility: 3,
  },
  {
    name: "Tuesday",
    Fire: 0,
    Medical: 7,
    Crime: 1,
    Natural: 0,
    Biological: 6,
    Utility: 3,
  },
  {
    name: "Wednesday",
    Fire: 2,
    Medical: 0,
    Crime: 3,
    Natural: 1,
    Biological: 2,
    Utility: 8,
  },
  {
    name: "Thursday",
    Fire: 1,
    Medical: 2,
    Crime: 5,
    Natural: 2,
    Biological: 0,
    Utility: 4,
  },
  {
    name: "Friday",
    Fire: 5,
    Medical: 1,
    Crime: 0,
    Natural: 1,
    Biological: 3,
    Utility: 4,
  },
];

const sumData = Data.reduce(
  (acc, current) => {
    return {
      Fire: acc.Fire + current.Fire,
      Medical: acc.Medical + current.Medical,
      Crime: acc.Crime + current.Crime,
      Natural: acc.Natural + current.Natural,
      Biological: acc.Biological + current.Biological,
      Utility: acc.Utility + current.Utility,
    };
  },
  {
    Fire: 0,
    Medical: 0,
    Crime: 0,
    Natural: 0,
    Biological: 0,
    Utility: 0,
  }
);

export const totalData = [
  {
    name: "Total",
    Fire: sumData.Fire,
    Medical: sumData.Medical,
    Crime: sumData.Crime,
    Natural: sumData.Natural,
    Biological: sumData.Biological,
    Utility: sumData.Utility,
    total:
      sumData.Fire +
      sumData.Medical +
      sumData.Crime +
      sumData.Natural +
      sumData.Biological +
      sumData.Utility,
  },
];

//radarChart

export const dailyData = [
  {
    FIRE: 2,
  },
  {
    MEDICAL: 7,
  },
  {
    CRIME: 8,
  },
  {
    NATURAL: 2,
  },
  {
    BIOLOGICAL: 1,
  },
  {
    UTILITY: 5,
  },
];

export const headerTable = [
  {
    id: 1,
    KEY: "NAME",
    Label: "NAME",
  },
  {
    id: 2,
    KEY: "ID",
    Label: "USER ID",
  },
  {
    id: 3,
    KEY: "DEPARTMENT",
    Label: "DEPARTMENT",
  },
  {
    id: 4,
    KEY: "ALERT",
    Label: "TYPE OF ALERT",
  },
  {
    id: 7,
    KEY: "RESPONSE",
    Label: "DATE",
  },
  {
    id: 5,
    KEY: "RESPOND",
    Label: "STATUS",
  },
  {
    id: 6,
    KEY: "VIEW",
    Label: "VIEW REPORT",
  },
 
];

export const headerTableReport = [
  {
    id: 1,
    KEY: "NAME",
    Label: "NAME",
  },
  {
    id: 2,
    KEY: "ID",
    Label: "USER ID",
  },
  {
    id: 3,
    KEY: "DEPARTMENT",
    Label: "DEPARTMENT",
  },
  {
    id: 4,
    KEY: "PARENTSNUM",
    Label: "PARENT'S NUMBER",
  },

  {
    id: 6,
    KEY: "RESPONSE",
    Label: "RESPONSE DATE",
  },
];

export const ReportData = [
  {
    id: 1,
    NAME: "John Paul Flancia",
    ID: "a21-123",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "Yes",
    RESPONSE: "2022-01-01",
  },
  {
    id: 2,
    NAME: "Jea Gozo",
    ID: "a22-456",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "No",

    RESPONSE: "2022-01-02",
  },
  {
    id: 3,
    NAME: "Janna Mae Cuello Soliza",
    ID: "a23-789",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "Yes",

    RESPONSE: "2022-01-03",
  },
  {
    id: 4,
    NAME: "Gerbie Caday",
    ID: "a24-101",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "No",

    RESPONSE: "2022-01-04",
  },
  {
    id: 5,
    NAME: "Jhudielle Mark Bautista",
    ID: "a25-202",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "Yes",

    RESPONSE: "2022-01-05",
  },
  {
    id: 6,
    NAME: "Dave Aeroll Calusin",
    ID: "a26-303",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "No",

    RESPONSE: "2022-01-06",
  },
  {
    id: 7,
    NAME: "Lee William Harris",
    ID: "a27-404",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "Yes",

    RESPONSE: "2022-01-07",
  },
  {
    id: 8,
    NAME: "Emily Chen",
    ID: "a28-505",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",

    RESPONSE: "2022-01-08",
  },
  {
    id: 9,
    NAME: "Michael Brown",
    ID: "a29-606",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-01-09",
  },
  {
    id: 10,
    NAME: "Sarah Lee",
    ID: "a30-707",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",

    RESPONSE: "2022-01-10",
  },
  {
    id: 11,
    NAME: "Kevin White",
    ID: "a31-808",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "No",

    RESPONSE: "2022-01-11",
  },
  {
    id: 12,
    NAME: "Lisa Nguyen",
    ID: "a32-909",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "Yes",

    RESPONSE: "2022-01-12",
  },
  {
    id: 13,
    NAME: "David Kim",
    ID: "a33-1010",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "No",

    RESPONSE: "2022-01-13",
  },
  {
    id: 14,
    NAME: "Jessica Martin",
    ID: "a34-1111",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",

    RESPONSE: "2022-01-14",
  },
  {
    id: 15,
    NAME: "Brian Hall",
    ID: "a35-1212",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-01-15",
  },
  {
    id: 16,
    NAME: "Amanda Garcia",
    ID: "a36-1313",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",

    RESPONSE: "2022-01-16",
  },
  {
    id: 17,
    NAME: "Christopher Walker",
    ID: "a37-1414",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "No",

    RESPONSE: "2022-01-17",
  },
  {
    id: 18,
    NAME: "Melissa Davis",
    ID: "a38-1515",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "Yes",

    RESPONSE: "2022-01-18",
  },
  {
    id: 19,
    NAME: "Matthew Taylor",
    ID: "a39-1616",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "No",

    RESPONSE: "2022-01-19",
  },
  {
    id: 20,
    NAME: "Nicole Johnson",
    ID: "a40-1717",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",

    RESPONSE: "2022-01-20",
  },
  {
    id: 21,
    NAME: "Daniel Lee",
    ID: "a41-1818",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-01-21",
  },
  {
    id: 22,
    NAME: "Elizabeth Williams",
    ID: "a42-1919",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",

    RESPONSE: "2022-01-22",
  },
  {
    id: 23,
    NAME: "James Brown",
    ID: "a43-2020",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "No",

    RESPONSE: "2022-01 -23",
  },
  {
    id: 24,
    NAME: "Olivia Martin",
    ID: "a44-2121",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "Yes",

    RESPONSE: "2022-01-24",
  },
  {
    id: 25,
    NAME: "Benjamin Davis",
    ID: "a45-2222",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "No",

    RESPONSE: "2022-01-25",
  },
  {
    id: 26,
    NAME: "Samantha Hall",
    ID: "a46-2323",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",
    RESPONSE: "2022-01-26",
  },
  {
    id: 27,
    NAME: "Alexander Garcia",
    ID: "a47-2424",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-01-27",
  },
  {
    id: 28,
    NAME: "Hannah Walker",
    ID: "a48-2525",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",

    RESPONSE: "2022-01-28",
  },
  {
    id: 29,
    NAME: "Joseph Taylor",
    ID: "a49-2626",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "No",

    RESPONSE: "2022-01-29",
  },
  {
    id: 30,
    NAME: "Emily Johnson",
    ID: "a50-2727",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "Yes",

    RESPONSE: "2022-01-30",
  },
  {
    id: 31,
    NAME: "Michael Lee",
    ID: "a51-2828",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "No",

    RESPONSE: "2022-01-31",
  },
  {
    id: 32,
    NAME: "Sarah Williams",
    ID: "a52-2929",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",

    RESPONSE: "2022-02-01",
  },
  {
    id: 33,
    NAME: "Kevin Brown",
    ID: "a53-3030",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-02-02",
  },
  {
    id: 34,
    NAME: "Lisa Martin",
    ID: "a54-3131",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",

    RESPONSE: "2022-02-03",
  },
  {
    id: 35,
    NAME: "David Hall",
    ID: "a55-3232",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "No",

    RESPONSE: "2022-02-04",
  },
  {
    id: 36,
    NAME: "Jessica Garcia",
    ID: "a56-3333",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "Yes",

    RESPONSE: "2022-02-05",
  },
  {
    id: 37,
    NAME: "Brian Walker",
    ID: "a57-3434",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "No",

    RESPONSE: "2022-02-06",
  },
  {
    id: 38,
    NAME: "Amanda Taylor",
    ID: "a58-3535",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",

    RESPONSE: "2022-02-07",
  },
  {
    id: 39,
    NAME: "Christopher Johnson",
    ID: "a59-3636",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-02-08",
  },
  {
    id: 40,
    NAME: "Melissa Lee",
    ID: "a60-3737",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",

    RESPONSE: "2022-02-09",
  },
  {
    id: 41,
    NAME: "Matthew Davis",
    ID: "a61-3838",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "No",

    RESPONSE: "2022-02-10",
  },
  {
    id: 42,
    NAME: "Nicole Williams",
    ID: "a62-3939",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "Yes",

    RESPONSE: "2022-02-11",
  },
  {
    id: 43,
    NAME: "Daniel Brown",
    ID: "a63-4040",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "No",

    RESPONSE: "2022-02-12",
  },
  {
    id: 44,
    NAME: "Elizabeth Martin",
    ID: "a64-4141",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",

    RESPONSE: "2022-02-13",
  },
  {
    id: 45,
    NAME: "James Hall",
    ID: "a65-4242",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-02-14",
  },
  {
    id: 46,
    NAME: "Olivia Garcia",
    ID: "a66-4343",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",

    RESPONSE: "2022-02-15",
  },
  {
    id: 47,
    NAME: "Benjamin Walker",
    ID: "a67- 4444",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "No",

    RESPONSE: "2022-02-16",
  },
  {
    id: 48,
    NAME: "Samantha Taylor",
    ID: "a68-4545",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "Yes",

    RESPONSE: "2022-02-17",
  },
  {
    id: 49,
    NAME: "Alexander Johnson",
    ID: "a69-4646",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "No",

    RESPONSE: "2022-02-18",
  },
  {
    id: 50,
    NAME: "Hannah Lee",
    ID: "a70-4747",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",

    RESPONSE: "2022-02-19",
  },
  {
    id: 51,
    NAME: "Joseph Davis",
    ID: "a71-4848",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-02-20",
  },
  {
    id: 52,
    NAME: "Emily Williams",
    ID: "a72-4949",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",

    RESPONSE: "2022-02-21",
  },
  {
    id: 53,
    NAME: "Michael Brown",
    ID: "a73-5050",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "No",

    RESPONSE: "2022-02-22",
  },
  {
    id: 54,
    NAME: "Sarah Martin",
    ID: "a74-5151",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "Yes",

    RESPONSE: "2022-02-23",
  },
  {
    id: 55,
    NAME: "Kevin Hall",
    ID: "a75-5252",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "No",

    RESPONSE: "2022-02-24",
  },
  {
    id: 56,
    NAME: "Lisa Garcia",
    ID: "a76-5353",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",

    RESPONSE: "2022-02-25",
  },
  {
    id: 57,
    NAME: "David Walker",
    ID: "a77-5454",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-02-26",
  },
  {
    id: 58,
    NAME: "Jessica Taylor",
    ID: "a78-5555",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",

    RESPONSE: "2022-02-27",
  },
  {
    id: 59,
    NAME: "Brian Johnson",
    ID: "a79-5656",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "No",

    RESPONSE: "2022-02-28",
  },
  {
    id: 60,
    NAME: "Amanda Lee",
    ID: "a80-5757",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "Yes",

    RESPONSE: "2022-03-01",
  },
  {
    id: 61,
    NAME: "Christopher Davis",
    ID: "a81-5858",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "No",

    RESPONSE: "2022-03-02",
  },
  {
    id: 62,
    NAME: "Melissa Williams",
    ID: "a82-5959",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",

    RESPONSE: "2022-03-03",
  },
  {
    id: 63,
    NAME: "Matthew Brown",
    ID: "a83-6060",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-03-04",
  },
  {
    id: 64,
    NAME: "Nicole Martin",
    ID: "a84-6161",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",

    RESPONSE: "2022-03-05",
  },
  {
    id: 65,
    NAME: "Daniel Hall",
    ID: "a85-6262",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "No",

    RESPONSE: "2022-03-06",
  },
  {
    id: 66,
    NAME: "Elizabeth Garcia",
    ID: "a86-6363",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "Yes",

    RESPONSE: "2022-03-07",
  },
  {
    id: 67,
    NAME: "James Walker",
    ID: "a87-6464",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "No",

    RESPONSE: "2022-03-08",
  },
  {
    id: 68,
    NAME: "Olivia Taylor",
    ID: "a88-6565",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",

    RESPONSE: "2022-03-09",
  },
  {
    id: 69,
    NAME: "Benjamin Johnson",
    ID: "a89-6666",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-03-10",
  },
  {
    id: 70,
    NAME: "Samantha Lee",
    ID: "a90-6767",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",
    VIEW: null,
    RESPONSE: "2022-03-11",
  },
  {
    id: 71,
    NAME: "Alexander Davis",
    ID: "a91-6868",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "No",

    RESPONSE: "2022-03-12",
  },
  {
    id: 72,
    NAME: "Hannah Williams",
    ID: "a92-6969",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "Yes",

    RESPONSE: "2022-03-13",
  },
  {
    id: 73,
    NAME: "Joseph Brown",
    ID: "a93-7070",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "No",

    RESPONSE: "2022-03-14",
  },
  {
    id: 74,
    NAME: "Emily Martin",
    ID: "a94-7171",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",

    RESPONSE: "2022-03-15",
  },
  {
    id: 75,
    NAME: "Michael Hall",
    ID: "a95-7272",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-03-16",
  },
  {
    id: 76,
    NAME: "Sarah Garcia",
    ID: "a96-7373",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",

    RESPONSE: "2022-03-17",
  },
  {
    id: 77,
    NAME: "Kevin Walker",
    ID: "a97-7474",
    DEPARTMENT: "Marketing Department",
    ALERT: "Utility",
    RESPOND: "No",

    RESPONSE: "2022-03-18",
  },
  {
    id: 78,
    NAME: "Lisa Taylor",
    ID: "a98-7575",
    DEPARTMENT: "IT Department",
    ALERT: "Crime",
    RESPOND: "Yes",

    RESPONSE: "2022-03-19",
  },
  {
    id: 79,
    NAME: "David Johnson",
    ID: "a99-7676",
    DEPARTMENT: "Finance Department",
    ALERT: "Fire",
    RESPOND: "No",

    RESPONSE: "2022-03-20",
  },
  {
    id: 80,
    NAME: "Jessica Lee",
    ID: "a100-7777",
    DEPARTMENT: "Marketing Department",
    ALERT: "Natural",
    RESPOND: "Yes",

    RESPONSE: "2022-03-21",
  },
  {
    id: 81,
    NAME: "Brian Davis",
    ID: "a101-7878",
    DEPARTMENT: "IT Department",
    ALERT: "Biological",
    RESPOND: "No",

    RESPONSE: "2022-03-22",
  },
  {
    id: 82,
    NAME: "Amanda Williams",
    ID: "a102-7979",
    DEPARTMENT: "Finance Department",
    ALERT: "Medical",
    RESPOND: "Yes",

    RESPONSE: "2022-03-23",
  },
];

export const sortedData = {};

ReportData.forEach((item) => {
  const alertType = item.ALERT;
  if (!sortedData[alertType]) {
    sortedData[alertType] = [];
  }
  sortedData[alertType].push(item);
});
