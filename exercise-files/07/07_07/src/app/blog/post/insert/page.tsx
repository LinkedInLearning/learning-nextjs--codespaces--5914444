"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid';

export default function Page() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    content: '',
    date: new Date().toISOString().slice(0, 10)
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const uuid = uuidv4();
    fetch(`/api/posts?id=${uuid}&title=${formData.title}&content=${formData.content}&date=${formData.date}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formData, id: uuid })
    }).then(() => {
      // Clear form fields
      setFormData({
        id: '',
        title: '',
        content: '',
        date: ''
      });
      router.push('/blog/posts');
    }).catch(console.error)
  }

  return (
    <div className="bg-white p-8 rounded shadow">
      <h2 className="text-2xl mb-4 text-purple-700">New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="title" className="block font-medium">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="content" className="block font-medium">Content:</label>
          <textarea id="content" name="content" rows="4" value={formData.content} onChange={handleChange} className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"></textarea>
        </div>
        <div>
          <label htmlFor="date" className="block font-medium">Date:</label>
          <input type="text" id="date" name="date" value={formData.date} readOnly className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none" />

        </div>
        <div>
          <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700">Submit</button>
        </div>
      </form>
    </div>
  );
}
