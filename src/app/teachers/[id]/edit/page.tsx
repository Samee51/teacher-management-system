"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TeacherForm from "@/components/forms/TeacherForm";
import { teachers as teachersData , Teacher } from "@/utils/mockData";



export default function EditTeacherPage() {
  const { id } = useParams();
  const router = useRouter();
  const [teacher, setTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    const teacherId = Number(id);
    const found = teachersData.find((t) => t.id === teacherId);
    setTeacher(found || null);
  }, [id]);

  const handleUpdate = (data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    status: "active" | "inactive";
    address: string;
    joiningDate: string;
    gender: "male" | "female" | "other";
    experience: string;
    photoUrl: string;
  }) => {
    if (!teacher) {
      console.error("Teacher is null");
      return;
    }

    const updatedTeacher: Teacher = {
      ...teacher,
      ...data, // override editable fields
    };

    console.log("Final Updated Teacher:", updatedTeacher);
    router.push("/teachers");
  };

  if (!teacher) {
    return (
      <p className="p-4 text-gray-600 dark:text-gray-300">
        Loading teacher data...
      </p>
    );
  }

  return (
    <div className="m-4 bg-white dark:bg-gray-900 p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Edit Teacher</h1>
      <TeacherForm initialData={teacher} onSubmit={handleUpdate} />
    </div>
  );
}
