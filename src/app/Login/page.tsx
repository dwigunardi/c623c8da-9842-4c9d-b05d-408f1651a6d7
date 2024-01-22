import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  User,
} from "@nextui-org/react";
import UserLoginCard from "./UserLoginCard";

type UserData = {
  users: {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
      color: string;
      type: string;
    };
    domain: string;
    ip: string;
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    macAddress: string;
    university: string;
    bank: {
      cardExpire: string;
      cardNumber: string;
      cardType: string;
      currency: string;
      iban: string;
    };
    company: {
      address: {
        address: string;
        city: string;
        coordinates: {
          lat: number;
          lng: number;
        };
        postalCode: string;
        state: string;
      };
      department: string;
      name: string;
      title: string;
    };
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: {
      currency: string;
      flag: string;
      price: number;
    };
  };
};
export default async function Login() {
  const res = await fetch("https://dummyjson.com/users?limit=12", {
    cache: "no-cache",
    method: "GET",
    next: {
      tags: ["users"],
    },
  });

  const userData: any = await res.json();

  return (
    <div className="w-full h-screen relative">
      <div className="absolute w-full h-full z-0">
        <Image alt="nextui logo" height={700} src="/bg-right.png" width={700} />
      </div>
      <div className="absolute w-full h-full transform rotate-180 z-0">
        <Image alt="nextui logo" height={500} src="/bg-right.png" width={500} />
      </div>
      <div className="w-full h-screen flex justify-center items-center z-10">
        <Card className="w-1/2 max-w-full max-h-[400px]" isBlurred shadow="lg">
          <h1 className="text-3xl font-bold text-center">Login Area</h1>
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex">
              <h1 className="text-center text-2xl">Silahkan Pilih User</h1>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="row gap-3 justify-center">
              {userData.users.map((user: any) => (
                <UserLoginCard key={user.id} data={user} />
              ))}
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
