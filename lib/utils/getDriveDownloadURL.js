const getDriveDownloadUrl = (dUrl) => {
  let segments = dUrl.split("/");
  let downloadUrl = `https://drive.google.com/thumbnail?id=${segments[5]}`;
  return downloadUrl;
};

export default getDriveDownloadUrl;
