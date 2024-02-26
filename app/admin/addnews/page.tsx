"use client";

import { Add_Category } from "@/app/Components/Admin/Add_Category";
import { Image_Show } from "@/app/Components/Admin/Image_Show";
import { news } from "@/utils/types";
import axios from "axios";
import React, { useState } from "react";
import { format, subDays } from "date-fns";
import { Loadder } from "@/app/Components/Loadder";

const initialFormData: news = {
  author: "Ada News",
  title: "",
  description: "",
  url: "",
  urlToImage: "",
  publishedAt: format(new Date(), "dd/MM/yyyy"),
  content: "",
  category: "",
};

export default function page() {
  let [formData, setFormData] = useState(initialFormData);
  let [isLoadding, setIsLoadding] = useState(false);
  let [submitLoadding, setSubmitLoadding] = useState(false);
  const {
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
    category,
  } = formData;

  async function uploadImage(e: any) {
    setIsLoadding(true);
    const image = e.target.files[0];
    console.log("frm upload image");
    console.log(image);
    try {
      const Data = new FormData();
      Data.append("image", image); // Make sure 'image' matches the field name expected by the server
      const link = `${process.env.NEXT_PUBLIC_IMG_UP_API}`;
      console.log(link);
      const response = await axios.post(link, Data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(e.target.id);
      console.log(response);
      const deleteUrl = response.data.data.delete_url;
      const displayUrl = response.data.data.display_url;
      const imageUrl = response.data.data.url;
      console.log(e.target.id);
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: displayUrl,
      }));
      console.log(formData);

      console.log("Delete URL:", deleteUrl);
      console.log("Display URL:", displayUrl);
      console.log("Image URL:", imageUrl);
      // setImgURL(displayUrl);
      // setImgDeleteURL(deleteUrl);
    } catch (error) {
      console.log(error);
    }
    // }

    setIsLoadding(false);
  }

  function onChange(e: any) {
    console.log(e.target.id);
    console.log(e.target.value);
    if (!e.target.files) {
      console.log("yooh");
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  }

  console.log(formData);

  async function onSubmit(e: any) {
    e.preventDefault();
    setSubmitLoadding(true)
    if (
      !formData.title ||
      !formData.description ||
      !formData.urlToImage ||
      !formData.content
    ) {
      console.log("please give all data");
    } else {
      try {
        const res = await fetch("/api/addnews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log(formData);
        const namespace = "pageview";
        // const res = await axios.post("/api/register",formData)
        setFormData(initialFormData)
        if (res.status === 400) {
          // setError("This email is already registered");
        }
        if (res.status === 200) {
          // setError("");
          // router.push("/login");
          console.log("ok from add news api");
        }
      } catch (error) {
        // setError("Error, try again");
        console.log(error);
      }
    }
    setSubmitLoadding(false)
  }
  if(submitLoadding)return (
    <>
    <Loadder/>
    </>
  )

  return (
    <div className="bg-red-00 h-fit flex flex-col">
      <div className="bg-zinc-400 p-5">
        <p className="text-3xl font-semibold">Add New</p>
      </div>
      <div className="mt-10 px-10 w-full flex flex-col bg-red-00 z-10 h-auto md:flex-row">
        {isLoadding ? (
          <div className="md:w-[35%] bg-green-00">
          <div className="w-80 h-96 bg-zinc-200 rounded-3xl flex flex-col items-center justify-center shadow-2xl text-zinc-700">
            <div className="loadingio-spinner-rolling-hzwlgzevidp">
              <div className="ldio-juih00wo6og">
                <div></div>
              </div>
            </div>
          </div>
          </div>
        ) : (
          <div className="md:w-[35%] bg-green-00">
            {urlToImage ? (
              <Image_Show imageURL={urlToImage} />
            ) : (
              <div className="w-80 h-96 bg-zinc-200 rounded-3xl flex flex-col items-center justify-center shadow-2xl text-zinc-700">
                <label>
                  <p className="bg-blue-500 px-5 py-2 rounded-3xl text-xl shadow-lg mb-2 mt-2 font-semibold transition hover:text-white hover:scale-105 duration-200 ease-in-out cursor-pointer">
                    Upload Image
                    <input
                      type="file"
                      id="urlToImage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </p>
                </label>
                <p>Or</p>
                <p className="font-semibold">Drop a fle</p>
              </div>
            )}
          </div>
        )}
        <div className="md:w-[65%] z-10 bg-red-00">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-5">
              <div className="">
                <label className="text font-semibold">
                  Title
                  <input
                    type="text"
                    className="p-2 w-full border border-gray-400 rounded-lg md-5"
                    placeholder=""
                    id="title"
                    value={formData.title}
                    onChange={onChange}
                    required
                  />
                </label>
              </div>
              <div className="">
                <label className="text font-semibold">
                  Description
                  <textarea
                    // type="text"
                    className="p-2 w-full border border-gray-400 rounded-lg md-5"
                    placeholder=""
                    id="description"
                    value={formData.description}
                    onChange={onChange}
                    required
                  />
                </label>
              </div>
              <div className="z-20">
                <Add_Category onChange={onChange} />
              </div>
              <div className="">
                <label className="text font-semibold">
                  Content
                  <textarea
                    // type="text"
                    className="p-2 w-full border border-gray-400 rounded-lg md-5"
                    placeholder=""
                    id="content"
                    value={formData.content}
                    onChange={onChange}
                    required
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                {" "}
                Add new
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
