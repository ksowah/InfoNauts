/* eslint-disable @next/next/no-img-element */
import Footer from "../components/footer";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import { useStateValue } from "../context/stateProvider";
import { BsPhone } from "react-icons/bs";
import { AiOutlineBank } from "react-icons/ai";
import Modal from "../components/payment/Modal";
import { useState } from "react";
import Selector from "../components/selector";
import { ImSpinner6 } from "react-icons/im";
import { toast } from "react-toastify";
const banks = [
  { value: "GCB", label: "Ghana Commmercial Bank" },
  { value: "Barclays", label: "Barclays" },
  { value: "Republic Bank", label: "Republic Bank" },
  { value: "Ecobank", label: "Ecobank" },
  { value: "Zennith Bank", label: "Zennith Bank" },
];
const telcos = [
  { value: "MTN", label: "MTN" },
  { value: "AirtelTigo", label: "AitelTigo" },
  { value: "Vodafone", label: "Vodafone" },
];
const Payment = () => {
  const [{ cheque }, dispatch] = useStateValue();
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [complete, setComplete] = useState(false);
  const Momo = () => {
    return (
      <div
        onClick={() => setIsOpen1(true)}
        className="flex mb-[6rem] items-center cursor-pointer h-[3.5rem] rounded-[8px] bg-[#0360C5] text-white  mt-1 w-full md:w-[20rem] shadow-xl"
      >
        <div className="px-1 md:px-[1rem] h-full flex items-center justify-center border-r-2 border-white">
          <BsPhone className="text-[1.8rem] font-bold" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="font-bold text-[1.3rem]">Mobile Money</p>
        </div>
      </div>
    );
  };

  const Bank = () => {
    return (
      <div
        onClick={() => setIsOpen2(true)}
        className="flex items-center cursor-pointer h-[3.5rem] rounded-[8px] bg-[#0360C5] text-white  mt-1 w-full md:w-[20rem] shadow-xl"
      >
        <div className="px-1 md:px-[1rem] h-full flex items-center justify-center border-r-2 border-white">
          <AiOutlineBank className="text-[1.8rem] font-bold" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="font-bold text-[1.3rem]">Select Bank</p>
        </div>
      </div>
    );
  };

  const BankContent = () => {
    const [bank, setBank] = useState("");
    const [accountNo, setAccountNo] = useState("");
    const [loading, setLoading] = useState(false);
    const completePayment = () => {
      if (!bank || !accountNo) return toast.error("Fill your account details");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setComplete(true);
      }, 5000);
    };
    return (
      <div className="flex items-center justify-center w-full py-2 px-1 flex-col gap-y-2">
        <div className="bg-[#0360C5] font-bold text-[1.3rem] w-full py-3 text-white">
          Select Bank
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <Selector
            onChange={setBank}
            name="bank"
            options={banks}
            placeholder="--Choose Bank--"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <input
            type="number"
            placeholder="Enter account number"
            onChange={(e) => setAccountNo(e.target.value)}
            className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary text-xl "
          />
        </div>
        <motion.button
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          whileHover={{ scale: 1.02 }}
          onClick={completePayment}
          className="w-full my-3 mt-6 shadow-xl cursor-pointer text-[1.3rem] font-bold h-[3.5rem] rounded-[8px] bg-[#13C503] text-white flex items-center justify-center gap-x-5"
        >
          {
            // If loading is true, show loading spinner
            loading && <ImSpinner6 className="animate spinner animate-spin" />
          }
          {loading ? "Processing..." : "Pay"}
        </motion.button>
      </div>
    );
  };

  const MomoContent = () => {
    const [telco, setTelco] = useState("");
    const [number, setNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const completePayment = () => {
      if (!telco || !number) return toast.error("Fill your wallet details");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setComplete(true);
      }, 5000);
    };

    return (
      <div className="flex items-center justify-center w-full py-2 px-1 flex-col gap-y-2">
        <div className="bg-[#0360C5] font-bold text-[1.3rem] w-full py-3 text-white">
          Mobile Money
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <Selector
            name={"telco"}
            onChange={setTelco}
            options={telcos}
            placeholder="--Choose Wallet Network--"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <input
            type="number"
            name="number"
            placeholder="Enter phone number"
            onChange={(e) => setNumber(e.target.value)}
            className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary text-xl "
          />
        </div>
        <motion.button
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          whileHover={{ scale: 1.02 }}
          onClick={completePayment}
          className="w-full my-3 mt-6 shadow-xl cursor-pointer text-[1.3rem] font-bold h-[3.5rem] rounded-[8px] bg-[#13C503] text-white flex items-center justify-center gap-x-5"
        >
          {
            // If loading is true, show loading spinner
            loading && <ImSpinner6 className="animate spinner animate-spin" />
          }
          {loading ? "Processing..." : "Pay"}
        </motion.button>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>{complete ? "Transaction Complete" : "Payment Method"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bg />

      <div className="text-black mt-32 w-full flex flex-col items-center justify-center">
        <h1 className="font-medium text-center md:text-start text-[2rem] md:text-[3rem]">
          {complete ? "Transaction Complete" : "Payment Method"}
        </h1>
        <div className="h-[2px] w-20 md:w-52 bg-black"></div>
      </div>
      <div className="flex items-center w-full h-[48rem] justify-center p-4 md:p-20 mt-8 mb-[8rem]">
        <div className="h-full w-full flex items-center bg-[#E2F1F6] p-4 md:p-10">
          <div className="hidden lg:flex h-full flex-1 relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-sky-rgba  z-30"></div>
            <Image
              src={cheque?.url || "/assets/mobile.png"}
              alt="lady holding mobile phone"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* --------------------- */}
          {!complete ? (
            <div className="flex flex-col items-center justify-center h-full px-8 p-4 md:px-16 md:py-6 flex-1 bg-white">
              <div className="flex flex-col flex-1 py-[2rem] ">
                <Modal
                  isOpen={isOpen1}
                  setIsOpen={setIsOpen1}
                  Button={Momo}
                  Content={MomoContent}
                />
                <Modal
                  isOpen={isOpen2}
                  setIsOpen={setIsOpen2}
                  Button={Bank}
                  Content={BankContent}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full px-8 p-4 md:px-16 md:py-6 flex-1 bg-[#f7f7f7]">
              <h1 className="font-bold text-2xl">
                Thank you for using our service
              </h1>
              <div className="relative w-68 h-68 ">
                <img
                  src={"/assets/successgif.gif"}
                  alt="lady holding mobile phone"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-green-600 font-bold text-base">
                Your transaction has been completed successfully
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
