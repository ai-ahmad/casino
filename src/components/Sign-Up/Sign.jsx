import React from 'react'

const Sign = () => {
  return (
   <>
    <div class="bg-white p-8 rounded shadow-md w-96">
    <h2 class="text-2xl font-semibold mb-4">Sign Up</h2>
    <form>
        <div class="mb-4">
            <label for="name" class="block text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400" placeholder="John Doe" required/>
        </div>
        <div class="mb-4">
            <label for="email" class="block text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400" placeholder="johndoe@example.com" required/>
        </div>
        <div class="mb-4">
            <label for="password" class="block text-gray-600">Password</label>
            <input type="password" id="password" name="password" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400" placeholder="********" required/>
        </div>
        <div class="mb-4">
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Sign Up</button>
        </div>
    </form>
</div></>
  )
}

export default Sign