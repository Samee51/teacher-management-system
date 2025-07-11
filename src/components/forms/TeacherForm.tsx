"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone is required"),
  subject: z.string().min(1, "Subject is required"),
  status: z.enum(["active", "inactive"]),
});

type FormData = z.infer<typeof schema>;

interface Props {
  initialData?: FormData;
  onSubmit?: (data: FormData) => void;
}

export default function TeacherForm({ initialData, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: initialData || {
      name: "",
      email: "",
      phone: "",
      subject: "",
      status: "active",
    },
  });

  const submitHandler = async (data: FormData) => {
    try {
      // Simulate saving
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Teacher saved!");
      onSubmit?.(data);
    } catch {
      toast.error("Failed to save");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
      <div>
        <label className="block font-medium">Name</label>
        <input
          {...register("name")}
          className="input"
          placeholder="Full name"
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          {...register("email")}
          className="input"
          placeholder="Email"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Phone</label>
        <input
          {...register("phone")}
          className="input"
          placeholder="Phone number"
        />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Subject</label>
        <input
          {...register("subject")}
          className="input"
          placeholder="Subject"
        />
        {errors.subject && <p className="text-sm text-red-500">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Status</label>
        <select {...register("status")} className="input">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        {errors.status && <p className="text-sm text-red-500">{errors.status.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {isSubmitting ? "Saving..." : "Save Teacher"}
      </button>
    </form>
  );
}
