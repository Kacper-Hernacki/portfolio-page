import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

export default function () {
  return (
    <div className="grid items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center">
        <p>
          This Repo is private, if you want to have an access contact me and I will send you an access.
        </p>
        <a href="mailto:hernackikacper@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

    </div>
  );
}