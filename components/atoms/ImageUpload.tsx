"use client";

import {
  useState,
  useRef,
  type ChangeEvent,
  type DragEvent,
  useEffect,
} from "react";
import { ImageIcon, XIcon } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  maxSizeMB?: number;
  onFileSelect?: (file: File) => void;
  label?: string;
  onChange?: (file: File | null) => void;
  currentCover?: string | null;
}

export default function ImageUpload({
  maxSizeMB = 25,
  onFileSelect,
  onChange,
  currentCover,
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    // Check file size
    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > maxSizeMB) {
      if (onChange) onChange(null);
      setError(`File size exceeds ${maxSizeMB}MB limit`);
      setSelectedFile(null);
      return;
    }
    if (onChange) onChange(file);
    setError(null);
    setSelectedFile(file);
    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    if (currentCover) setCurrentImage(currentCover);
  }, [currentCover]);

  return (
    <div className="w-full">
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center rounded-md border-2 border-dashed p-6 transition-colors ${
          isDragging
            ? "bg-primary/5 border-primary"
            : selectedFile
              ? "border-[#0B414B] bg-[#0B414B]/10"
              : error
                ? "border-red-500 bg-red-50"
                : "hover:bg-primary/5 border-[#B1C0C0] hover:border-primary"
        }`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleInputChange}
          className="hidden"
          accept="image/*"
        />

        {selectedFile ? (
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image
                src={URL.createObjectURL(selectedFile)}
                alt={selectedFile.name}
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                }}
              />
              <div
                className="absolute -right-3 -top-3 cursor-pointer rounded-full bg-white p-1"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon color="red" width={20} height={20} />
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>
        ) : currentImage ? (
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image
                src={currentImage}
                alt={currentImage}
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                }}
              />
              <div
                className="absolute -right-3 -top-3 cursor-pointer rounded-full bg-white p-1"
                onClick={() => setCurrentImage(null)}
              >
                <XIcon color="red" width={20} height={20} />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center rounded-full bg-[#F8F7F2] p-2">
              <div className="relative size-6">
                <ImageIcon />
              </div>
            </div>
            <p
              className="cursor-pointer text-sm font-normal text-[#0B414B]"
              onClick={handleClick}
            >
              Click or drag and drop to Upload Ebook Cover{" "}
            </p>
            <p className="mt-1 text-xs text-black">
              (Max. File size: {maxSizeMB} MB)
            </p>
          </>
        )}
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
      </div>
    </div>
  );
}
