"use client";

function Form() {
  return (
    <form className="flex flex-col gap-5 justify-center items-center p-12 mt-14 bg-lime-950 text-center max-w-[35vw]">
      <h3 className="text-3xl text-white font-semibold">
        Schedule an <br /> Appointment
      </h3>
      <p className="font-normal text-white text-base">
        Here, let visitors know what will happen when they complete your form.
      </p>
      <input
        required
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name*"
        className="border-solid rounded p-3 w-[100%] invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <input
        required
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name*"
        className="rounded  p-3 w-[100%] invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <input
        required
        type="email"
        name="email"
        id="email"
        placeholder="Email*"
        className="rounded  p-3 w-[100%] invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <input
        required
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Phone Number*"
        className="rounded p-3 w-[100%] invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />

      <select
        required
        name="type"
        id="type-select"
        className="rounded  p-3 w-[100%]"
      >
        <option value="">Type of Appointment</option>
        <option value="Type1">Type 1</option>
        <option value="Type2">Type 2</option>
        <option value="Type3">Type 3</option>
      </select>
      <button
        type="submit"
        className="rounded border-none text-white p-4 w-full font-semibold text-xl transition duration-300 bg-emerald-400 hover:bg-emerald-500"
        onClick={(e) => {}}
      >
        SCHEDULE NOW
      </button>
    </form>
  );
}

export default Form;
