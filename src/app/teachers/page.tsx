"use client";

import { useState } from "react";
import Image from "next/image";
import { Pencil, Trash2, Eye } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { teachers as initialTeachersData } from "@/utils/mockData";

export default function TeacherListPage() {
  const [search, setSearch] = useState("");
  const [teachers, setTeachers] = useState(initialTeachersData);

  const filteredTeachers = teachers.filter((teacher) =>
    `${teacher.name} ${teacher.email} ${teacher.subject}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setTeachers((prev) => prev.filter((teacher) => teacher.id !== id));
  };

  return (
    <section>
      <div className="m-2">
        <input
          type="text"
          placeholder="Search teachers..."
          className="w-full px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-1 focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-auto">
        <div className="w-full overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-2 py-3 text-center text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  Sr
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  Teacher
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  Subject
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  Payment
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredTeachers.length > 0 ? (
                filteredTeachers.map((teacher, index) => (
                  <tr
                    key={teacher.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    <td className="px-2 py-3 text-center text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      {index + 1}.
                    </td>
                    <td className="px-4 pr-6 py-3 flex items-center gap-3 whitespace-nowrap">
                      <Image
                        src={teacher.avatar}
                        alt={teacher.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {teacher.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {teacher.email}
                        </p>
                      </div>
                    </td>

                    <td className="px-4 pl-6 py-3 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      {teacher.subject}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={clsx(
                          "inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium",
                          teacher.status === "active"
                            ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                        )}
                      >
                        {teacher.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={clsx(
                          "inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium",
                          teacher.paymentStatus === "paid"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                            : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                        )}
                      >
                        {teacher.paymentStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2 text-gray-600 dark:text-gray-300 justify-evenly whitespace-nowrap">
                      <Link href={`/teachers/${teacher.id}`}>
                        <Eye size={18} />
                      </Link>
                      <Link href={`/teachers/${teacher.id}/edit`} title="Edit">
                        <Pencil size={18} />
                      </Link>
                      <button
                        title="Delete"
                        onClick={() => handleDelete(teacher.id)}
                        className="text-red-500 dark:text-red-400 cursor-pointer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center text-gray-500 dark:text-gray-400 py-6"
                  >
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
