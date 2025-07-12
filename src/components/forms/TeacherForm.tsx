"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Save } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
  phone: z.string().min(10, "Phone is required"),
  subject: z.string().min(1, "Subject is required"),
  status: z.enum(["active", "inactive"]),
  address: z.string().min(1, "Address is required"),
  joiningDate: z.string().min(1, "Joining date is required"),
  gender: z.enum(["male", "female", "other"]),
  experience: z.string().min(1, "Experience is required"),
  photoUrl: z.string().url("Invalid URL"),
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
      address: "",
      joiningDate: "",
      gender: "male",
      experience: "",
      photoUrl: "",
    },
  });

  const submitHandler = async (data: FormData) => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Teacher saved!");
      onSubmit?.(data);
    } catch {
      toast.error("Failed to save");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-lg p-4 space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Full Name */}
        <div className="flex flex-col md:col-span-2 space-y-1">
          <label className="text-md font-bold text-gray-600 dark:text-gray-200">
            Full Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Full name"
            className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:ring-white dark:focus:ring-black focus:outline-none"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-1">
          <label className="text-md font-bold text-gray-600 dark:text-gray-200">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:ring-white dark:focus:ring-black focus:outline-none"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col space-y-1">
          <label className="text-md font-bold text-gray-600 dark:text-gray-200">
            Phone Number
          </label>
          <input
            {...register("phone")}
            type="text"
            placeholder="10-digit phone number"
            className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:ring-white dark:focus:ring-black focus:outline-none"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Subject */}
        <div className="flex flex-col space-y-1">
          <label className="text-md font-bold text-gray-600 dark:text-gray-200">
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject name"
            className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:ring-white dark:focus:ring-black focus:outline-none"
          />
          {errors.subject && (
            <p className="text-sm text-red-500 mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Experience */}
        <div className="flex flex-col space-y-1">
          <label className="text-md font-bold text-gray-600 dark:text-gray-200">
            Experience
          </label>
          <input
            {...register("experience")}
            type="text"
            placeholder="e.g. 3 years"
            className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:ring-white dark:focus:ring-black focus:outline-none"
          />
          {errors.experience && (
            <p className="text-sm text-red-500 mt-1">
              {errors.experience.message}
            </p>
          )}
        </div>

        {/* Address */}
        <div className="flex flex-col md:col-span-2 xl:col-span-2 space-y-1">
          <label className="text-md font-bold text-gray-600 dark:text-gray-200">
            Residential Address
          </label>
          <input
            {...register("address")}
            type="text"
            placeholder="Residential address"
            className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:ring-white dark:focus:ring-black focus:outline-none"
          />
          {errors.address && (
            <p className="text-sm text-red-500 mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Photo URL */}
        <div className="flex flex-col space-y-1">
          <label className="text-md font-bold text-gray-600 dark:text-gray-200">
            Photo URL
          </label>
          <input
            {...register("photoUrl")}
            type="url"
            placeholder="https://..."
            className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:ring-white dark:focus:ring-black focus:outline-none"
          />
          {errors.photoUrl && (
            <p className="text-sm text-red-500 mt-1">
              {errors.photoUrl.message}
            </p>
          )}
        </div>

        {/* Status */}
        <div className="flex flex-col space-y-1">
          <label className="text-md font-bold text-gray-600 dark:text-gray-200">
            Status
          </label>
          <select
            {...register("status")}
            className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:ring-white dark:focus:ring-black focus:outline-none"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          {errors.status && (
            <p className="text-sm text-red-500 mt-1">{errors.status.message}</p>
          )}
        </div>

        {/* Gender */}
        <div className="flex flex-col space-y-1">
          <label className="text-md font-bold text-gray-600 dark:text-gray-200">
            Gender
          </label>
          <select
            {...register("gender")}
            className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:ring-white dark:focus:ring-black focus:outline-none"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-sm text-red-500 mt-1">{errors.gender.message}</p>
          )}
        </div>

        {/* Joining Date */}
        <div className="flex flex-col space-y-1">
          <label className="text-md font-bold text-gray-600 dark:text-gray-200">
            Joining Date
          </label>
          <input
            {...register("joiningDate")}
            type="date"
            className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:ring-white dark:focus:ring-black focus:outline-none"
          />
          {errors.joiningDate && (
            <p className="text-sm text-red-500 mt-1">
              {errors.joiningDate.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-full flex justify-start pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gray-700 flex item-center justify-center gap-2 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black disabled:opacity-50"
          >
            <Save />
            {isSubmitting ? "Saving..." : "Save Teacher"}
          </button>
        </div>
      </div>
    </form>
  );
}
