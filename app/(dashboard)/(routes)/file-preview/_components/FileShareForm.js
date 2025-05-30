import React, { useState } from 'react';
import { Copy } from 'lucide-react';

function FileShareForm({ file, onPasswordSave }) {
  const [isPasswordEnable, setIsEnablePassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(file.shortUrl);
    alert('Link copied to clipboard!');
  };

  const handlePasswordSave = () => {
    if (onPasswordSave && typeof onPasswordSave === 'function') {
      onPasswordSave(password);
    }
  };

  return file && (
    <div className="flex flex-col gap-2">
      {/* Link Section */}
      <div className="flex gap-2 items-center">
        <label className="text-[14px] text-gray-500">Short URL</label>
        <div className="flex gap-5 p-2 border rounded-md">
          <input
            type="text"
            value={file.shortUrl}
            disabled
            className="disabled:text-gray-500 bg-transparent outline-none"
          />
          <Copy
            className="text-gray-400 hover:text-black cursor-pointer"
            onClick={handleCopy}
          />
        </div>
      </div>

      {/* Password Enable Section */}
      <div className="gap-3 flex mt-5 items-center">
        <input
          type="checkbox"
          onChange={(e) => setIsEnablePassword(e.target.checked)}
        />
        <label>Enable Password?</label>
      </div>

      {/* Password Input Section */}
      {isPasswordEnable && (
        <div className="flex gap-3 items-center mt-3">
          <input
            type="password"
            className="border rounded-md w-full p-2 outline-none disabled:text-gray-500 bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      )}

      {/* Save Button */}
      <button
        className="p-2 bg-primary text-white rounded-md disabled:bg-gray-300 mt-4"
        disabled={isPasswordEnable && password.length < 3}
        onClick={handlePasswordSave}
      >
        Save
      </button>
    </div>
  );
}

export default FileShareForm;
