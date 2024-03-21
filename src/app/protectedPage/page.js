"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Topheader from '../components/Topheader';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

const MainContent = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/category');
      console.log(response)
      console.log("category",response.data.categories)
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCheckboxChange = (categoryId) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(categoryId)) {
        // If category is already selected, remove it
        return prevSelectedCategories.filter((id) => id !== categoryId);
      } else {
        // If category is not selected, add it
        return [...prevSelectedCategories, categoryId];
      }
    });
  };

  const handleSave = async () => {
    try {
      // Send selected categories to the backend
      await axios.post('/api/saveCategories', { categories: selectedCategories });
      alert('Categories saved successfully!');
    } catch (error) {
      console.error('Error saving categories:', error);
      alert('Failed to save categories. Please try again later.');
    }
  };

  return (
    <>
      <Topheader />
      <div className='w-[576px] h-[658px] border border-[#C1C1C1] border-solid rounded-[20px] mx-auto my-8 flex flex-col gap-4 p-5'>
        {/* Display categories with checkboxes */}
        {categories.map((category) => (
          <div key={category.id} className="flex items-center">
            <Checkbox
              checked={selectedCategories.includes(category.id)}
              onChange={() => handleCheckboxChange(category.id)}
            />
            <label htmlFor={`category-${category.id}`} className="ml-2">{category.name}</label>
          </div>
        ))}

        {/* Pagination */}
        <nav className="flex justify-center items-center gap-x-1">
          {[1, 2, 3, 4, 5, 6].map((pageNumber) => (
            <Button
              key={pageNumber}
              type="button"
              btnText={pageNumber.toString()}
              className={`min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 py-2 px-3 text-sm rounded-lg focus:outline-none`}
            />
          ))}
        </nav>

        {/* Save button */}
        <Button type="button" btnText="Save" onClick={handleSave} className="w-full mt-4" />
      </div>
    </>
  );
};

export default MainContent;
