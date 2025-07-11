"use client";

import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";

const teachers = [
  {
    id: 1,
    name: "Ishita Sharma",
    email: "ishita.sharma@example.com",
    subject: "Biology",
    paymentStatus: "unpaid",
    lastPayment: "2025-05-25",
    amount: 4000,
    avatar: "/avatar2.jpg",
  },
  {
    id: 2,
    name: "Vivaan Reddy",
    email: "vivaan.reddy@example.com",
    subject: "Chemistry",
    paymentStatus: "unpaid",
    lastPayment: "2025-06-06",
    amount: 4000,
    avatar: "/avatar1.jpg",
  },
  {
    id: 3,
    name: "Reyansh Kapoor",
    email: "reyansh.kapoor@example.com",
    subject: "Biology",
    paymentStatus: "unpaid",
    lastPayment: "2025-06-21",
    amount: 3000,
    avatar: "/avatar2.jpg",
  },
  {
    id: 4,
    name: "Diya Reddy",
    email: "diya.reddy@example.com",
    subject: "Chemistry",
    paymentStatus: "unpaid",
    lastPayment: "2025-06-16",
    amount: 2500,
    avatar: "/avatar1.jpg",
  },
  {
    id: 5,
    name: "Arjun Nair",
    email: "arjun.nair@example.com",
    subject: "History",
    paymentStatus: "paid",
    lastPayment: "2025-06-20",
    amount: 3000,
    avatar: "/avatar2.jpg",
  },
  {
    id: 6,
    name: "Arjun Nair",
    email: "arjun.nair@example.com",
    subject: "Mathematics",
    paymentStatus: "unpaid",
    lastPayment: "2025-06-24",
    amount: 4000,
    avatar: "/avatar1.jpg",
  },
  {
    id: 7,
    name: "Myra Deshmukh",
    email: "myra.deshmukh@example.com",
    subject: "English",
    paymentStatus: "unpaid",
    lastPayment: "2025-06-28",
    amount: 3000,
    avatar: "/avatar2.jpg",
  },
  {
    id: 8,
    name: "Kabir Kapoor",
    email: "kabir.kapoor@example.com",
    subject: "Economics",
    paymentStatus: "paid",
    lastPayment: "2025-07-08",
    amount: 4500,
    avatar: "/avatar1.jpg",
  },
  {
    id: 9,
    name: "Aarav Singh",
    email: "aarav.singh@example.com",
    subject: "Physics",
    paymentStatus: "paid",
    lastPayment: "2025-06-15",
    amount: 3200,
    avatar: "/avatar2.jpg",
  },
  {
    id: 10,
    name: "Anaya Sharma",
    email: "anaya.sharma@example.com",
    subject: "History",
    paymentStatus: "unpaid",
    lastPayment: "2025-07-10",
    amount: 3200,
    avatar: "/avatar1.jpg",
  },
];


export default function PaymentPage() {
  const [teacherList, setTeacherList] = useState(teachers);
  const [searchTerm, setSearchTerm] = useState("");

  const markAsPaid = (id: number) => {
    toast.success("Marked as Paid");
    setTeacherList((prev) =>
      prev.map((teacher) =>
        teacher.id === id
          ? {
              ...teacher,
              paymentStatus: "paid",
              lastPayment: new Date().toISOString().slice(0, 10),
            }
          : teacher
      )
    );
  };

  const filteredTeachers = teacherList.filter((teacher) =>
    `${teacher.name} ${teacher.email} ${teacher.subject}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <div className="m-2">
        <input
          type="text"
          placeholder="Search by name, email or subject..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg  shadow-md focus:outline-none focus:ring-1 focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="max-h-100 overflow-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800 ">
            <tr>
              <th className="px-2 py-3 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Sr</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Teacher</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Payment Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Last Payment</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white dark:bg-gray-900 divide-y  divide-gray-200 dark:divide-gray-700">
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher, index) => (
                <tr key={teacher.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <td className="px-2 text-center py-3 text-gray-600 dark:text-gray-300">{index + 1}.</td>
                  <td className="px-4 py-3 flex items-center gap-3">
                    <Image
                      src={teacher.avatar}
                      alt={teacher.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{teacher.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{teacher.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{teacher.subject}</td>
                  <td className="px-4 py-3">
                    {teacher.paymentStatus === "paid" ? (
                      <span className="inline-flex items-center text-green-600 dark:text-green-400 gap-1">
                        <CheckCircle size={16} />
                        Paid
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-red-500 dark:text-red-400 gap-1">
                        <XCircle size={16} />
                        Unpaid
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{teacher.lastPayment}</td>
                  <td className="px-4 py-3">
                    {teacher.paymentStatus === "unpaid" ? (
                      <button
                        onClick={() => markAsPaid(teacher.id)}
                        className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Mark as Paid
                      </button>
                    ) : (
                      <span className="text-sm text-gray-400">No Action</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center text-gray-500 dark:text-gray-400 py-6">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
