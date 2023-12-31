import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import ImageUploader from "../components/ImageUploader";
import { SEND_CODE } from "../utils";
import { toast } from "react-toastify";
import { ImSpinner6 } from "react-icons/im";
const Confirm = () => {
  const router = useRouter();
  const [image, setImage] = useState<null | any>(null);
  const [imageURI, setImageURI] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [otp, setOtp] = useState("");
  const sendEmail = () => {
    // Genrate dummy 6 digit number
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOtp(otp.toString());
    const receiver_email = "sbentil005@st.ug.edu.gh";
    const subject = "E-Cheque Cashout User Verification";
    const sender_name = "E-Cheque Cashout";
    const message = `
    <p>Thank you for using E-Cheque Cashout. Your Verfication code is: </p>
    <h1>${otp}</h1>
    <p>Enter this code to confirm your email address.</p>
    <p>Your code will expire in 30 minutes.</p>
    `;
    const data = {
      receiver_email,
      subject,
      message,
      sender_name,
    };
    setLoading(true);
    SEND_CODE(data, setLoading, (data) => {
      toast.success("Verification code sent to your email");
      setShowForm(true);
      setLoading(false);
    });
  };

  const verifyCode = () => {
    if (code === "") return toast.error("Please enter the code");
    setTimeout(() => {
      if (code !== otp) return toast.error("Invalid code");
      toast.success("Email verified");
      router.push("/payment");
    }, 3000)
  };

  return (
    <div>
      <Head>
        <title>Security Check</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bg />

      <div className="text-black mt-32 w-full flex flex-col items-center justify-center">
        <h1 className="font-medium text-center md:text-start text-[2rem] md:text-[3rem]">
          Security Check
        </h1>
        <div className="h-[2px] w-20 md:w-52 bg-black"></div>
      </div>
      <div className="w-full flex items-center justify-center my-10">
        <div className="w-full md:w-[70%] px-5 py-2 flex flex-col gap-y-4 md:flex-row items-center justify-between">
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-xl md:text-2xl">
              Upload your Ghana Card
            </h1>
            <p>
              JPG, JPEG or PNG formats that are 300 x 300 (for HiDPI Displays)
              are accepted. If your image size is bigger, please compress it and
              verify your email address
            </p>
          </div>
          <div>
            <ImageUploader
              setImageURI={setImageURI}
              image={image}
              setImage={setImage}
              className="md:w-[30rem] md:h-[20rem]"
            />
          </div>
        </div>
      </div>
      {imageURI && (
        <div className="w-full px-2 py-3 flex flex-col items-center justify-center gap-y-3">
          <p>
            Verify your identity via email. This is to ensure that you are the
            rightful owner of the account.
          </p>
          <div>
            {!showForm ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="bg-green-600 text-white font-medium px-4 py-3 rounded-lg w-full flex items-center justify-center gap-x-10"
                onClick={sendEmail}
              >
                {
                  // If loading is true, show loading spinner
                  loading && (
                    <ImSpinner6 className="animate spinner animate-spin" />
                  )
                }
                {loading ? "Sending..." : "Send Verification Code"}
              </motion.button>
            ) : (
              <div className="flex item-center jutify-start gap-3 flex-col">
                <p>Enter the code sent to your email to continue</p>
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-green-600 text-xl font-bold"
                  onChange={(e) => setCode(e.target.value)}
                />
                <button
                  onClick={verifyCode}
                  className="bg-green-600 text-white font-medium px-4 py-3 rounded-lg  "
                >
                  Verify
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Confirm;
