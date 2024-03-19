const getDriveDownloadUrl = (dUrl) => {
  let segments = dUrl.split("/");
  let downloadUrl = `https://drive.google.com/thumbnail?sz=w1000&id=${segments[5]}`;
  return downloadUrl;
};

export default getDriveDownloadUrl;
