import { useState, useMemo, useCallback, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

//INTRNAL IMPORT
import { VotingContext } from "../context/Voter";
import { CONTRACT_OWNER } from "../context/constants";
import images from "../assets";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Loader from "../components/Loader";

const candidateRegisration = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const {
    uploadToIPFSCandidate,
    setCandidate,
    getNewCandidate,
    candidateArray,
    loader,
    currentAccount,
  } = useContext(VotingContext);
  const [candidateForm, setCandidateForm] = useState({
    name: "",
    address: "",
    age: "",
  });

  const router = useRouter();

  // Check if current user is admin
  const isAdmin = currentAccount && currentAccount.toLowerCase() === CONTRACT_OWNER.toLowerCase();

  //-------------VOTERS
  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToIPFSCandidate(acceptedFile[0]);
    console.log(url);
    setFileUrl(url);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  useEffect(() => {
    getNewCandidate();
  }, []);

  // If not connected, show message
  if (!currentAccount) {
    return (
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-purple-500/30 max-w-md text-center">
          <svg className="w-16 h-16 text-purple-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <h2 className="text-2xl font-bold text-white mb-2">Wallet Not Connected</h2>
          <p className="text-purple-200 mb-4">Please connect your wallet to access this page.</p>
        </div>
      </div>
    );
  }

  // If not admin, show access denied
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-gradient-to-br from-red-800/40 to-orange-900/40 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-red-500/30 max-w-md text-center">
          <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
          <p className="text-red-200 mb-4">Only the contract owner (admin) can register candidates.</p>
          <p className="text-red-300 text-sm font-mono bg-red-900/30 px-3 py-2 rounded-lg">
            Owner: {CONTRACT_OWNER.slice(0, 10)}...{CONTRACT_OWNER.slice(-8)}
          </p>
          <button
            onClick={() => router.push('/')}
            className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Preview or Existing Candidates */}
          <div className="lg:col-span-1">
            {fileUrl ? (
              <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-purple-500/30 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4">Preview</h3>
                <div className="space-y-4">
                  <div className="relative h-48 w-full rounded-xl overflow-hidden">
                    <img src={fileUrl} alt="Candidate preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-purple-900/50 rounded-xl p-4 space-y-2">
                    <p className="text-purple-200 text-sm">
                      <span className="font-semibold text-white">Name:</span> {candidateForm.name || "Not set"}
                    </p>
                    <p className="text-purple-200 text-sm break-all">
                      <span className="font-semibold text-white">Address:</span> {candidateForm.address ? candidateForm.address.slice(0, 20) + "..." : "Not set"}
                    </p>
                    <p className="text-purple-200 text-sm">
                      <span className="font-semibold text-white">Age:</span> {candidateForm.age || "Not set"}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Candidate Registration</h3>
                <p className="text-purple-200 text-sm mb-2">
                  Blockchain voting organization providing secure Ethereum blockchain ecosystem
                </p>
                <div className="bg-purple-600/30 rounded-lg p-3 mb-4">
                  <p className="text-purple-300 text-sm font-semibold">Registered Candidates</p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {candidateArray?.slice(0, 4).map((el, i) => (
                    <div key={i + 1} className="bg-purple-900/40 rounded-lg p-3 border border-purple-500/20 hover:border-purple-400/40 transition-all">
                      <div className="flex items-center space-x-3">
                        <div className="relative h-12 w-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={el?.image} alt="Candidate" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold text-sm truncate">
                            Age: {el?.age}
                          </p>
                          <p className="text-purple-300 text-xs">
                            ID: <span className="text-purple-400">#{el?.candidateID}</span>
                          </p>
                          <p className="text-purple-300 text-xs truncate">
                            {el?.address.slice(0, 7)}...
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-purple-500/30">
              <h1 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Register New Candidate</span>
              </h1>

              {/* File Upload */}
              <div className="mb-6">
                <div {...getRootProps()} className="border-2 border-dashed border-purple-500/50 rounded-2xl p-8 text-center cursor-pointer hover:border-purple-400 hover:bg-purple-900/20 transition-all duration-300">
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-purple-600/30 p-4 rounded-full">
                      <Image
                        src={images.upload}
                        width={80}
                        height={80}
                        objectFit="contain"
                        alt="file upload"
                      />
                    </div>
                    <div>
                      <p className="text-purple-300 font-semibold mb-1">Upload Candidate Image</p>
                      <p className="text-purple-400 text-sm">JPG, PNG, GIF, WEBM - MAX 100MB</p>
                    </div>
                    <p className="text-purple-300 text-sm">Drag & Drop or Browse</p>
                  </div>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-4">
                <Input
                  inputType="text"
                  title="Candidate Name"
                  placeholder="Enter full name"
                  handleClick={(e) =>
                    setCandidateForm({ ...candidateForm, name: e.target.value })
                  }
                />
                <Input
                  inputType="text"
                  title="Wallet Address"
                  placeholder="0x..."
                  handleClick={(e) =>
                    setCandidateForm({ ...candidateForm, address: e.target.value })
                  }
                />
                <Input
                  inputType="text"
                  title="Age"
                  placeholder="Enter age"
                  handleClick={(e) =>
                    setCandidateForm({ ...candidateForm, age: e.target.value })
                  }
                />

                <div className="pt-4">
                  <Button
                    btnName="Register Candidate"
                    handleClick={() => setCandidate(candidateForm, fileUrl, router)}
                  />
                </div>
              </div>
            </div>

            {/* Notice Box */}
            <div className="mt-6 bg-gradient-to-r from-yellow-900/40 to-orange-900/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-yellow-500/30">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image src={images.creator} alt="user profile" width={48} height={48} className="rounded-full" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-yellow-300 font-bold">Important Notice</p>
                  </div>
                  <p className="text-yellow-200 text-sm mb-2">
                    Organizer: <span className="font-mono bg-yellow-900/50 px-2 py-1 rounded">0xf39Fd6e51...</span>
                  </p>
                  <p className="text-yellow-100 text-sm">
                    Only the organizer of the voting contract can create and authorize voters and candidates for the voting election.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default candidateRegisration;
