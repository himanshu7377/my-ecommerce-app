// Client-side code
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopBar from '../components/TopBar';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

const MainContent = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchCategories();
    // loadUserCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/category');
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
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
      <div className='w-[576px] h-[658px] border border-[#C1C1C1] border-solid rounded-[20px] mx-auto my-8 flex flex-col gap-4 p-5'>
        <div>
          <h1 className='text-4xl text-bold text-center'>Please mark your interests!</h1>
          <p className='text-center m-8 text-xl '>We will keep you notified.</p>
        </div>
        <div>
          <h2 className='text-2xl text'>My saved interests!</h2>
        </div>
        {displayCategories.map((category) => (
          <div key={category.id} className="flex items-center m-3">
            <Checkbox
              checked={selectedCategories.includes(category.id)}
              onChange={() => handleCheckboxChange(category.id)}
            />
            <label htmlFor={`category-${category.id}`} className="ml-2">{category.name}</label>
          </div>
        ))}
        <nav className="flex justify-center items-center gap-x-1">
          <Button
            type="button"
            btnText="&lt;"
            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 py-2 px-3 text-sm rounded-lg focus:outline-none"
          />
          {[...Array(Math.ceil(categories.length / 6)).keys()].map((pageNumber) => (
            <Button
              key={pageNumber}
              type="button"
              btnText={pageNumber + 1}
              onClick={() => handlePageChange(pageNumber + 1)}
              className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 py-2 px-3 text-sm rounded-lg focus:outline-none"
            />
          ))}
          <Button
            type="button"
            btnText="&gt;"
            onClick={() => handlePageChange(currentPage < Math.ceil(categories.length / 6) ? currentPage + 1 : Math.ceil(categories.length / 6))}
            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 py-2 px-3 text-sm rounded-lg focus:outline-none"
          />
        </nav>
      </div>
    </>
  );
};

export default MainContent;
