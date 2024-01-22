'use client';
import { User } from "@nextui-org/react";
import React from "react";
import { useRouter } from 'next/navigation'
function UserLoginCard({ data: user }: any) {
    const router = useRouter();
  return (
    <div className="col-12 sm:col-6 md:col-3" key={user.id}>
      <div className="col-span-6 cursor-pointer">
        <User
          name={user.firstName}
          description={user.email}
          avatarProps={{
            src: user.image,
          }}
          onClick={() => router.push(`/Home`)}
        />
      </div>
    </div>
  );
}

export default UserLoginCard;
