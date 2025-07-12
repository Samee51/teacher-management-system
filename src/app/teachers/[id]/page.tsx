"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { teachers as dummyTeachers } from "@/utils/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Example working hours (appointed vs actual)
const workingHoursData = [
  { day: "Mon", appointed: 6, actual: 7 },
  { day: "Tue", appointed: 6, actual: 5 },
  { day: "Wed", appointed: 6, actual: 6 },
  { day: "Thu", appointed: 6, actual: 8 },
  { day: "Fri", appointed: 6, actual: 4 },
  { day: "Sat", appointed: 4, actual: 5 },
];

export default function TeacherProfilePage() {
  const { id } = useParams();
  const teacher = dummyTeachers.find((t) => t.id === Number(id));

  if (!teacher) {
    return <p className="text-red-500 text-center mt-8">Teacher not found.</p>;
  }

  const statusBadge = (
    text: string,
    type: "active" | "inactive" | "paid" | "unpaid"
  ) => {
    const badgeStyles: Record<string, string> = {
      active: "bg-green-100 text-green-700",
      inactive: "bg-yellow-100 text-yellow-700",
      paid: "bg-blue-100 text-blue-700",
      unpaid: "bg-red-100 text-red-700",
    };
    return (
      <span
        className={`text-sm px-2 py-1 rounded-full font-medium ${badgeStyles[type]}`}
      >
        {text}
      </span>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 m-2">
      {/* Profile Info Card */}
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
        {/* Profile Info */}
        <div className="flex items-center gap-6 border-b pb-6">
          <Image
            src={teacher.avatar}
            alt={teacher.name}
            width={90}
            height={90}
            className="rounded-full object-cover border-2 border-gray-300 dark:border-gray-700"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              {teacher.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {teacher.email}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {teacher.phone}
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center justify-between">
            <span className="font-medium">Subject:</span>
            <span>{teacher.subject}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Status:</span>
            {statusBadge(teacher.status, teacher.status as any)}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Payment Status:</span>
            {statusBadge(teacher.paymentStatus, teacher.paymentStatus as any)}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Last Payment:</span>
            <span>{teacher.lastPayment}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Phone:</span>
            <span>{teacher.phone}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Email:</span>
            <span>{teacher.email}</span>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-8 text-right">
          <Link
            href={`/teachers/${teacher.id}/edit`}
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-semibold py-2.5 px-5 rounded-xl shadow-md transition duration-200"
          >
            <Pencil size={18} />
            Edit Profile
          </Link>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 text-center">
          Weekly Working Hours Overview
        </h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={workingHoursData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="appointed"
                fill="#6366f1"
                name="Appointed Hours"
                barSize={20}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="actual"
                fill="#10b981"
                name="Actual Hours"
                barSize={20}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
