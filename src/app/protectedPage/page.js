// Client-side code
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "../components/TopBar";
import { useRouter } from 'next/router';
import Button from "../components/Button";
import Image from "next/image";


// const isUserAuthenticated = () => {
//  const token =localStorage.getItem('token')
//  console.log("token ",token)

//  if(token){
//   try {
//     return true
//   } catch (error) {
//     console.log("err from authentication",error)
//   }
//  }
// };

const MainContent = () => {
  // const router=useRouter()
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const isUserAuthenticated = () => {
      const token = localStorage.getItem('token');
     
     
      return !!token;
    };
  
    if (!isUserAuthenticated()) {
      window.location.href='/'
      return; // Stop execution if not authenticated
    }
  
    // Fetch categories and other operations requiring authentication
    fetchCategories();
  }, [authenticated]);

  
  const fetchCategories = async () => {

      // Check authentication status
     
    
    try {
      const response = await axios.get("/api/category");
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // const loadUserCategories = async () => {
  //   try {
  //     const response = await axios.get('/api/user-categories');
  //     setSelectedCategories(response.data.selectedCategories);
  //   } catch (error) {
  //     console.error('Error loading user categories:', error);
  //   }
  // };

  const handleCheckboxChange = async (categoryId) => {
    const updatedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];
    setSelectedCategories(updatedCategories);
    // try {
    //   await axios.post('/api/update-user-categories', { categories: updatedCategories });
    // } catch (error) {
    //   console.error('Error updating user categories:', error);
    // }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 6;
  const endIndex = Math.min(startIndex + 6, categories.length);
  const displayCategories = categories.slice(startIndex, endIndex);

  return (
    <>
      <TopBar />
      <div className="w-[576px] h-[658px] border border-[#C1C1C1] border-solid rounded-[20px] mx-auto my-8 flex flex-col gap-4 p-5">
        <div>
          <h1 className="text-4xl text-bold text-center">
            Please mark your interests!
          </h1>
          <p className="text-center m-8 text-xl ">We will keep you notified.</p>
        </div>
        <div>
          <h2 className="text-2xl text">My saved interests!</h2>
        </div>
        {displayCategories.map((category) => (
  <div key={category.id} className="flex items-center m-3">
    <label htmlFor={`category-${category.id}`} className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={selectedCategories.includes(category.id)}
        onChange={() => handleCheckboxChange(category.id)}
        id={`category-${category.id}`}
        className="hidden"
      />
      <div className="relative">
  <span
    className={`block w-6 h-6 rounded-md border border-gray-400 ${
      selectedCategories.includes(category.id) ? 'bg-black' : 'bg-gray-400'
    }`}
  ></span>
  {selectedCategories.includes(category.id) && (
    <Image src="/tick.svg" alt="tick" className="absolute inset-0 m-auto rounded-md" width={22} height={22} />
  )}
</div>
      <span className="font-light text-[#000000]">{category.name}</span>
    </label>
  </div>
))}
        <nav className="flex justify-center items-center gap-x-1">
          <Button
            type="button"
            btnText="&lt;"
            onClick={() =>
              handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
            }
            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 py-2 px-3 text-sm rounded-lg focus:outline-none"
          />
          {[...Array(Math.ceil(categories.length / 6)).keys()].map(
            (pageNumber) => (
              <Button
                key={pageNumber}
                type="button"
                btnText={pageNumber + 1}
                onClick={() => handlePageChange(pageNumber + 1)}
                className={`min-h-[38px] min-w-[38px] flex justify-center items-center text-sm rounded-lg focus:outline-none ${
                  currentPage === pageNumber + 1 ? 'text-black font-bold' : 'text-gray-900'
                }`}
              />
            )
          )}
          <Button
            type="button"
            btnText="&gt;"
            onClick={() =>
              handlePageChange(
                currentPage < Math.ceil(categories.length / 6)
                  ? currentPage + 1
                  : Math.ceil(categories.length / 6)
              )
            }
            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 py-2 px-3 text-sm rounded-lg focus:outline-none"
          />
        </nav>
      </div>
    </>
  );
};

export default MainContent;
