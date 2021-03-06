/* global api, queryUtil */
/* exported getTableData, recordingApiUrl, viewUrl */

const recordingApiUrl = api + "/api/v1/audiorecordings";
const viewUrl = '/view_audio_recording/';

function getTableData() {
  return [{
    tableName: "ID",
    datapointField: "id",
    parseFunction: queryUtil.parseNumber
  },
  {
    tableName: "Group",
    datapointField: "group",
    parseFunction: queryUtil.parseGroup
  },
  {
    tableName: "Device ID",
    datapointField: "deviceId",
    parseFunction: queryUtil.parseNumber
  },
  {
    tableName: "Location",
    datapointField: "location",
    parseFunction: queryUtil.parseLocation
  },
  {
    tableName: "Time",
    datapointField: "recordingDateTime",
    parseFunction: queryUtil.parseTimeOnly
  },
  {
    tableName: "Date",
    datapointField: "recordingDateTime",
    parseFunction: queryUtil.parseDateOnly
  },
  {
    tableName: "Duration",
    datapointField: "duration",
    parseFunction: queryUtil.parseDuration
  },
  {
    tableName: "BatteryLevel",
    datapointField: "batteryLevel",
    parseFunction: queryUtil.parseNumber
  },
  {
    tableName: "BatteryCharging",
    datapointField: "batteryCharging",
    parseFunction: queryUtil.parseString,
  },
  {
    tableName: "AirplaneMode",
    datapointField: "airplaneModeOn",
    parseFunction: queryUtil.parseBoolean,
  },
  {
    tableName: "File",
    datapointField: "id",
    parseFunction: queryUtil.parseDownload
  },
  ];
}
