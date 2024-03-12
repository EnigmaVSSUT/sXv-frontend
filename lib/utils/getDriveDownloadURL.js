const getDriveDownloadUrl = (dUrl) => {
  let segments = dUrl.split("/");
  let downloadUrl = `https://drive.google.com/uc?export=download&id=${segments[5]}`;
  return downloadUrl;
};

export default getDriveDownloadUrl;
