import React, { FC, useState } from "react";

const UserProfile: FC = (): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      // Generate a URL for the file so it can be previewed in the browser
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Here you would typically upload the file to a server.
      // For this example, we'll just log it to the console.
      console.log("File to be uploaded:", selectedFile);

      // Example: You can use FormData to send the file to the server
      // const formData = new FormData();
      // formData.append('file', selectedFile);

      // Example API call:
      // axios.post('/upload', formData).then(response => console.log(response));

      alert("File uploaded successfully!");
    }
  };

  return (
    <div>
      <h1>User Profile</h1>

      <label htmlFor="file-upload">
        Upload a profile picture:
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>

      {/* Preview the selected image */}
      {previewUrl && (
        <div>
          <h2>Preview:</h2>
          <img
            src={previewUrl}
            alt="Profile preview"
            style={{ width: "200px" }}
          />
        </div>
      )}

      <button onClick={handleUpload}>Upload Photo</button>
    </div>
  );
};

export default UserProfile;
