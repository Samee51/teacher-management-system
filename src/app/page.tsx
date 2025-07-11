"use client";
import {
  Users,
  CheckCircle,
  AlertCircle,
  CircleDollarSign,
} from "lucide-react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    title: "Total Teachers",
    value: 120,
    icon: <Users className="w-6 h-6 text-blue-600" />,
    bg: "bg-blue-100 dark:bg-blue-900",
  },
  {
    title: "Active Teachers",
    value: 95,
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    bg: "bg-green-100 dark:bg-green-900",
  },
  {
    title: "Pending Payments",
    value: 8,
    icon: <CircleDollarSign className="w-6 h-6 text-yellow-600" />,
    bg: "bg-yellow-100 dark:bg-yellow-900",
  },
  {
    title: "Total Amount Paid",
    value: "₹2,50,000",
    icon: <CircleDollarSign className="w-6 h-6 text-red-600" />,
    bg: "bg-red-100 dark:bg-red-900",
  },
];

const recentTeachers = [
  {
    id: 1,
    name: "Aditi Sharma",
    email: "aditi.sharma@example.com",
    avatar: "/avatar1.jpg",
  },
  {
    id: 2,
    name: "Rohan Deshmukh",
    email: "rohan.d@example.com",
    avatar: "/avatar2.jpg",
  },
  {
    id: 3,
    name: "Meena Rao",
    email: "meena.rao@example.com",
    avatar: "/avatar1.jpg",
  },
];
const paymentTrends = [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 15000 },
  { month: "Mar", amount: 17500 },
  { month: "Apr", amount: 14000 },
  { month: "May", amount: 20000 },
  { month: "Jun", amount: 18500 },
  { month: "Jul", amount: 22000 },
];

export default function DashboardPage() {
  return (
    <>
      <div className="space-y-3 p-4">
        <div className="grid grid-cols-1  md:gri-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 py-3 pe-4 rounded-xl shadow-md ">
            <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white mb-2">
              Monthly Payment Amounts
            </h3>

            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={paymentTrends}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis
                  dataKey="month"
                  stroke="#9ca3af"
                  tick={{ fontSize: 12 }}
                />
                <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                  labelStyle={{ color: "#fff" }}
                />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className={`rounded-xl p-4 flex items-center justify-between shadow-md bg-white`}
              >
                <div>
                  <h2 className="xl:text-3xl lg:text-2xl text-2xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.title}
                  </p>
                </div>
                <div
                  className={`p-2 ${stat.bg} dark:bg-gray-800 rounded-full shadow-md`}
                >
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md h-[270px] overflow-y-auto scrollbar-thin">
            <h3 className="text-lg text-center font-semibold mb-4 text-gray-800 dark:text-white">
              Recent Teachers
            </h3>
            <ul className="grid gap-1">
              {recentTeachers.map((teacher) => (
                <li
                  key={teacher.id}
                  className="group flex items-center justify-between px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={teacher.avatar}
                      alt={teacher.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {teacher.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {teacher.email}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`/teachers/${teacher.id}`}
                    className="text-xs text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition"
                  >
                    View
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md h-[270px] overflow-y-auto scrollbar-thin">
            <h3 className="text-lg text-center font-semibold mb-4 text-gray-800 dark:text-white">
              Unpaid Teachers
            </h3>
             <ul className="grid gap-1">
              {recentTeachers
                .filter((_, i) => i < 2) // simulate 2 unpaid
                .map((teacher, index) => (
                  <li
                    key={teacher.id}
                    className={`flex justify-between border-s-[15px] border-gray-400 items-center px-3 py-3 rounded bg-gray-50 "bg-gray-50 dark:bg-gray-800 " 
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={teacher.avatar}
                        alt={teacher.name}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">
                          {teacher.name}
                        </p>
                      </div>
                    </div>
                    <a
                      href="/payments"
                      className="text-sm text-blue-600 px-3 py-1 rounded hover:underline transition"
                    >
                      Pay Now
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
