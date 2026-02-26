'use client'

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useDropzone } from 'react-dropzone';
import { motion } from 'motion/react';
import { Upload } from 'lucide-react';

const mainVariant = {
  initial: { x: 0, y: 0 },
  animate: { x: 20, y: -20, opacity: 0.9 },
};

const secondaryVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

interface FileUploadProps {
  onChange?: (files: File[]) => void;
}

export const FileUploadStruc: React.FC<FileUploadProps> = ({ onChange }) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
    onChange?.(newFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: console.error,
  });

  const formatFileSize = (size: number) => (size / (1024 * 1024)).toFixed(2);

  const formatDate = (timestamp: number) => new Date(timestamp).toLocaleDateString();

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="p-6 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />
        <div className="flex flex-col items-center justify-center">
          <p className="relative z-20 font-bold text-foreground text-xl">
            Upload file
          </p>
          <p className="relative z-20 font-normal text-muted-foreground text-base mt-2">
            Drag or drop your files here or click to upload
          </p>
          <div className="relative w-full mt-10 max-w-xl mx-auto">
            {files.length > 0 ? (
              files.map((file, idx) => (
                <FileItem
                  key={file.name + idx}
                  file={file}
                  formatFileSize={formatFileSize}
                  formatDate={formatDate}
                  isFirst={idx === 0}
                />
              ))
            ) : (
              <EmptyState isDragActive={isDragActive} />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// File Item Component
interface FileItemProps {
  file: File;
  formatFileSize: (size: number) => string;
  formatDate: (timestamp: number) => string;
  isFirst: boolean;
}
const FileItem: React.FC<FileItemProps> = ({ file, formatFileSize, formatDate, isFirst }) => (
  <motion.div
    layoutId={isFirst ? 'file-upload' : `file-upload-${file.name}`}
    className={cn(
      'relative overflow-hidden z-40 bg-card border flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md shadow-sm',
    )}
  >
    <div className="flex justify-between w-full items-center gap-4">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout
        className="text-sm font-medium text-foreground truncate max-w-xs"
      >
        {file.name}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout
        className="rounded-lg px-2 py-1 w-fit shrink-0 text-xs font-medium bg-muted text-muted-foreground shadow-sm"
      >
        {formatFileSize(file.size)} MB
      </motion.p>
    </div>
    <div className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-muted-foreground">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout
        className="px-3 py-1 rounded-md bg-muted text-xs"
      >
        {file.type}
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} layout className="text-sm">
        modified {formatDate(file.lastModified)}
      </motion.p>
    </div>
  </motion.div>
);

// Empty State Component
interface EmptyStateProps {
  isDragActive: boolean;
}
const EmptyState: React.FC<EmptyStateProps> = ({ isDragActive }) => (
  <>
    <motion.div
      layoutId="file-upload"
      variants={mainVariant}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className={cn(
        'relative group-hover/file:shadow-xl z-40 bg-card border flex items-center justify-center h-28 mt-4 w-full max-w-32 mx-auto rounded-md shadow-sm transition-shadow',
      )}
    >
      {isDragActive ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-muted-foreground flex flex-col items-center"
        >
          Drop it
          <Upload size={24} className="h-6 w-6 text-primary shrink-0" />
        </motion.p>
      ) : (
        <Upload size={24} className="h-6 w-6 text-muted-foreground shrink-0" />
      )}
    </motion.div>
    <motion.div
      variants={secondaryVariant}
      className="absolute opacity-0 border border-dashed border-primary/50 inset-0 z-30 bg-primary/5 flex items-center justify-center h-28 mt-4 w-full max-w-32 mx-auto rounded-md"
    />
  </>
);

const FileUploadMotion = () => {
  const [file, setFile] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFile(files);
  };
  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-background border-muted rounded-xl flex items-center justify-center p-10">
      <FileUploadStruc onChange={handleFileUpload} />
    </div>
  );
}

export default FileUploadMotion;