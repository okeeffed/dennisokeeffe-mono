import Image from "next/image";
import profile from "@/images/bio.png";

export function ProfileImage(): JSX.Element {
  return (
    <div className="flex items-center justify-center">
      <Image
        alt="Profile picture"
        className="rounded-xl relative shadow-solid-green"
        height={180}
        priority
        src={profile}
        width={180}
      />
    </div>
  );
}
