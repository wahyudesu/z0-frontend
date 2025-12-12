import { Star } from "lucide-react";
import React from "react";
import { useT } from "@/context/locale-provider";

type Avatar = {
  src?: string;
  alt?: string;
};

const defaultAvatars: Avatar[] = [
  { src: "/file.svg", alt: "User 1" },
  { src: "/globe.svg", alt: "User 2" },
  { src: "/next.svg", alt: "User 3" },
  { src: "/vercel.svg", alt: "User 4" },
];

export default function SocialProof({
  avatars = defaultAvatars,
  peopleText,
}: {
  avatars?: Avatar[];
  peopleText?: string;
}) {
  const t = useT();

  return (
    <div className="mt-8 flex items-center gap-4">
      <div className="flex -space-x-3">
        {avatars.map((a, i) => (
          <img
            alt={a.alt}
            className="h-8 w-8 rounded-full border-2 border-white dark:border-black object-cover"
            key={i}
            src={a.src}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-400" />
          <Star className="h-4 w-4 text-yellow-400" />
          <Star className="h-4 w-4 text-yellow-400" />
          <Star className="h-4 w-4 text-yellow-400" />
          <Star className="h-4 w-4 text-yellow-400" />
        </div>
        <div className="text-sm font-medium text-foreground/90">
          {peopleText ?? t.socialProofJoinText}
        </div>
      </div>
    </div>
  );
}
