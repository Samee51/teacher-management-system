"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Pencil } from "lucide-react";
import Link from "next/link";

const dummyTeachers = [
  {
    id: 1,
    name: "Aditi Sharma",
    email: "aditi.sharma@example.com",
    phone: "+91 9876543210",
    subject: "Mathematics",
    status: "active",
    paymentStatus: "paid",
    lastPayment: "2024-06-30",
    avatar: "/avatar1.jpg",
  },
  {
    id: 2,
    name: "Rohan Deshmukh",
    email: "rohan.d@example.com",
    phone: "+91 9123456780",
    subject: "Science",
    status: "inactive",
    paymentStatus: "unpaid",
    lastPayment: "2024-05-25",
    avatar: "/avatar2.jpg",
  },
];

export default function TeacherProfilePage() {
  const { id } = useParams();
  const teacher = dummyTeachers.find((t) => t.id === Number(id));

  if (!teacher) {
    return <p className="text-red-500">Teacher not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
      <div className="flex items-center gap-6">
        <Image
          src={teacher.avatar}
          alt={teacher.name}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{teacher.name}</h2>
          <p className="text-gray-500 dark:text-gray-300">{teacher.email}</p>
          <p className="text-gray-500 dark:text-gray-300">{teacher.phone}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <p><strong className="text-gray-700 dark:text-gray-300">Subject:</strong> {teacher.subject}</p>
        <p>
          <strong className="text-gray-700 dark:text-gray-300">Status:</strong>{" "}
          <span className={teacher.status === "active" ? "text-green-500" : "text-yellow-500"}>
            {teacher.status}
          </span>
        </p>
        <p>
          <strong className="text-gray-700 dark:text-gray-300">Payment Status:</strong>{" "}
          <span className={teacher.paymentStatus === "paid" ? "text-blue-500" : "text-red-500"}>
            {teacher.paymentStatus}
          </span>
        </p>
        <p><strong className="text-gray-700 dark:text-gray-300">Last Payment:</strong> {teacher.lastPayment}</p>
      </div>

      <div className="mt-6">
        <Link
          href={`/teachers/edit/${teacher.id}`}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded"
        >
          <Pencil size={16} />
          Edit Profile
        </Link>
      </div>
    </div>
  );
}
