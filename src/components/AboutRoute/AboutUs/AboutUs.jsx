import { aboutshape, aboutus } from "../../../assets/image";

const AboutUs = () => {
  return (
    <>
      <div className="max-w-[100%] mb-20">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 py-[40px] gap-5">
          <div className="">
          <iframe width="560" height="415" src="https://www.youtube.com/embed/gsG7uj9-4Jo?si=kWgbcWZq3SwWufzu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="p-3 rounded-lg shadow-lg border w-[90%]"></iframe> 
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <div>
                <div>
                  <p className="font-[Poppins] text-[16px] lg:text-[20px] text-[#0162E4] font-semibold">
                    About Us Education
                  </p>
                </div>
                <div>
                  <h4 className="font-[Poppins] text-[24px] lg:text-[32px] font-semibold">
                    Go Your Skill in Next Level
                  </h4>
                </div>
              </div>

              <div className="w-[100px]">
                <img src={aboutshape} alt="about round" />
              </div>
            </div>

            <div>
              <p className="font-[Poppins] text-[#555555] text-[17px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sed turpis in arcu gravida faucibus euismod eget magna. Donec
                non justo ac libero pharetra congue.
              </p>
            </div>
            <div className="flex gap-5">
              <div className="w-[50px]">
                <svg fill="none" viewBox="0 0 45 45">
                  <g fill="#0D5FF9" clip-path="url(#clip0_2797_63)">
                    <path d="M22.078.176c-.272.255-.299.518-.263 2.97l.026 2.233.246.21c.308.265.519.265.826 0l.246-.21.027-2.233c.017-1.221.008-2.355-.027-2.504-.105-.58-.685-.827-1.08-.466zM7.031 6.416a.691.691 0 00-.176.466c0 .255.194.474 1.75 2.03 1.529 1.53 1.784 1.75 2.03 1.75.36 0 .641-.282.641-.643 0-.246-.21-.492-1.749-2.03C7.972 6.442 7.734 6.24 7.488 6.24a.685.685 0 00-.457.176zM35.473 7.99c-1.538 1.537-1.75 1.783-1.75 2.03 0 .36.282.641.642.641.246 0 .501-.22 2.03-1.749 1.556-1.556 1.75-1.775 1.75-2.03 0-.378-.264-.642-.633-.642-.246 0-.484.202-2.04 1.75zM21.067 7.392c-.826.087-2.285.43-3.05.72-2.97 1.117-5.686 3.534-7.083 6.32-.352.694-.36.843-.115 1.16.22.272.686.316.888.07.07-.079.316-.492.545-.905a12.092 12.092 0 016.451-5.476c2.33-.835 5.256-.835 7.594 0a11.85 11.85 0 016.6 5.81c.906 1.784 1.293 3.41 1.293 5.484 0 1.951-.378 3.613-1.213 5.309-.536 1.08-1.196 2.004-2.365 3.305-1.353 1.511-1.837 2.276-2.144 3.374l-.14.528h-11.47l-.203-.58c-.369-1.108-.861-1.802-2.628-3.744-1.3-1.433-2.074-2.743-2.645-4.448-.475-1.432-.607-2.452-.536-4.174.026-.81.079-1.653.105-1.881.044-.343.018-.44-.14-.598-.255-.255-.756-.21-.976.088-.37.51-.466 3.392-.176 5.115a13.116 13.116 0 003.164 6.54c1.758 1.96 1.97 2.223 2.294 2.864.185.378.36.853.396 1.055.026.211.079 1.547.114 2.97l.061 2.602.29.58c.185.387.458.739.8 1.055l.51.475.044.747c.07 1.336.747 2.373 1.916 2.927l.571.272h5.625l.572-.272c1.169-.554 1.845-1.591 1.916-2.927l.044-.747.51-.475c.342-.316.615-.668.8-1.054l.29-.58.043-2.954c.044-2.786.062-2.97.246-3.436.255-.642.906-1.556 1.705-2.426 2.206-2.364 3.296-4.474 3.78-7.277.15-.897.167-1.292.131-2.681-.07-2.285-.386-3.568-1.38-5.581-2.408-4.86-7.62-7.726-13.034-7.154zm7.234 28.16v1.098h-.923c-.809 0-.95.027-1.099.176a.657.657 0 00.053.958c.202.158.36.185 1.099.185h.87v.237c-.009.325-.308.976-.598 1.283-.132.14-.395.343-.589.44-.343.193-.422.193-4.482.193-4.06 0-4.14 0-4.483-.193a2.51 2.51 0 01-.588-.44c-.29-.307-.59-.958-.598-1.283v-.237H23.81l.22-.194c.316-.29.342-.659.052-.949-.167-.167-.29-.176-3.647-.176h-3.472v-2.197H28.3v1.099zm-1.67 6.258c-.009.72-.66 1.546-1.398 1.766-.457.14-4.746.14-5.203 0-.738-.22-1.388-1.046-1.397-1.766v-.326h7.998v.326z"></path>
                    <path d="M26.877 16.427c-.58.193-.914.545-3.059 3.305-1.221 1.573-2.25 2.856-2.285 2.856-.035 0-.571-.563-1.186-1.257-1.433-1.59-1.653-1.793-2.233-1.96-1.758-.527-3.304 1.319-2.47 2.953.088.167.818 1.037 1.626 1.934 3.481 3.85 3.402 3.78 4.395 3.78.624 0 1.116-.203 1.503-.625.58-.624 2.848-3.621 2.9-3.832.123-.483-.633-.94-1.028-.624-.08.062-.756.914-1.512 1.88-.756.977-1.432 1.794-1.511 1.829-.211.08-.563.062-.73-.026-.22-.123-4.447-4.826-4.526-5.037-.159-.439.299-1.037.8-1.037.263 0 .527.247 2.127 2.022 1.538 1.696 1.748 1.872 2.153 1.687.105-.052 1.274-1.476 2.584-3.172 1.318-1.697 2.496-3.156 2.619-3.261.606-.475 1.441.193 1.134.905-.062.158-.413.66-.774 1.116-.764.967-.835 1.125-.641 1.486.158.307.483.43.782.29.22-.097 1.6-1.802 1.837-2.26.483-.94.096-2.17-.862-2.733-.43-.246-1.221-.351-1.643-.22zM.791 21.463c-.37.395-.132.976.457 1.08.158.027 1.292.045 2.514.027l2.232-.026.211-.246c.255-.299.264-.492.026-.8l-.175-.229h-2.54c-2.505 0-2.55 0-2.725.194zM38.769 21.498c-.238.308-.229.501.026.8l.21.246 2.233.026c1.222.018 2.356 0 2.514-.026.571-.105.817-.694.457-1.081-.176-.194-.22-.194-2.725-.194h-2.54l-.175.23zM10.415 33.135c-.097.035-.94.835-1.863 1.775-1.494 1.503-1.697 1.74-1.697 1.987 0 .369.273.632.642.632.255 0 .475-.193 2.03-1.749 1.53-1.529 1.75-1.784 1.75-2.03 0-.44-.475-.782-.862-.615zM34.145 33.135a.636.636 0 00-.421.624c0 .228.246.518 1.749 2.021 1.555 1.556 1.775 1.75 2.03 1.75.378 0 .642-.264.642-.633 0-.247-.203-.484-1.732-2.013-.958-.958-1.82-1.758-1.916-1.776a.603.603 0 00-.352.027z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2797_63">
                      <path fill="#fff" d="M0 0h45v45H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-[Poppins] text-[1.5rem] text-[#222] font-semibold">
                  Our Success Mission
                </h4>
                <p className="font-[Poppins] text-[#555555] text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-[50px]">
                <svg fill="none" viewBox="0 0 45 45">
                  <g fill="#0D5FF9" clip-path="url(#clip0_2797_63)">
                    <path d="M22.078.176c-.272.255-.299.518-.263 2.97l.026 2.233.246.21c.308.265.519.265.826 0l.246-.21.027-2.233c.017-1.221.008-2.355-.027-2.504-.105-.58-.685-.827-1.08-.466zM7.031 6.416a.691.691 0 00-.176.466c0 .255.194.474 1.75 2.03 1.529 1.53 1.784 1.75 2.03 1.75.36 0 .641-.282.641-.643 0-.246-.21-.492-1.749-2.03C7.972 6.442 7.734 6.24 7.488 6.24a.685.685 0 00-.457.176zM35.473 7.99c-1.538 1.537-1.75 1.783-1.75 2.03 0 .36.282.641.642.641.246 0 .501-.22 2.03-1.749 1.556-1.556 1.75-1.775 1.75-2.03 0-.378-.264-.642-.633-.642-.246 0-.484.202-2.04 1.75zM21.067 7.392c-.826.087-2.285.43-3.05.72-2.97 1.117-5.686 3.534-7.083 6.32-.352.694-.36.843-.115 1.16.22.272.686.316.888.07.07-.079.316-.492.545-.905a12.092 12.092 0 016.451-5.476c2.33-.835 5.256-.835 7.594 0a11.85 11.85 0 016.6 5.81c.906 1.784 1.293 3.41 1.293 5.484 0 1.951-.378 3.613-1.213 5.309-.536 1.08-1.196 2.004-2.365 3.305-1.353 1.511-1.837 2.276-2.144 3.374l-.14.528h-11.47l-.203-.58c-.369-1.108-.861-1.802-2.628-3.744-1.3-1.433-2.074-2.743-2.645-4.448-.475-1.432-.607-2.452-.536-4.174.026-.81.079-1.653.105-1.881.044-.343.018-.44-.14-.598-.255-.255-.756-.21-.976.088-.37.51-.466 3.392-.176 5.115a13.116 13.116 0 003.164 6.54c1.758 1.96 1.97 2.223 2.294 2.864.185.378.36.853.396 1.055.026.211.079 1.547.114 2.97l.061 2.602.29.58c.185.387.458.739.8 1.055l.51.475.044.747c.07 1.336.747 2.373 1.916 2.927l.571.272h5.625l.572-.272c1.169-.554 1.845-1.591 1.916-2.927l.044-.747.51-.475c.342-.316.615-.668.8-1.054l.29-.58.043-2.954c.044-2.786.062-2.97.246-3.436.255-.642.906-1.556 1.705-2.426 2.206-2.364 3.296-4.474 3.78-7.277.15-.897.167-1.292.131-2.681-.07-2.285-.386-3.568-1.38-5.581-2.408-4.86-7.62-7.726-13.034-7.154zm7.234 28.16v1.098h-.923c-.809 0-.95.027-1.099.176a.657.657 0 00.053.958c.202.158.36.185 1.099.185h.87v.237c-.009.325-.308.976-.598 1.283-.132.14-.395.343-.589.44-.343.193-.422.193-4.482.193-4.06 0-4.14 0-4.483-.193a2.51 2.51 0 01-.588-.44c-.29-.307-.59-.958-.598-1.283v-.237H23.81l.22-.194c.316-.29.342-.659.052-.949-.167-.167-.29-.176-3.647-.176h-3.472v-2.197H28.3v1.099zm-1.67 6.258c-.009.72-.66 1.546-1.398 1.766-.457.14-4.746.14-5.203 0-.738-.22-1.388-1.046-1.397-1.766v-.326h7.998v.326z"></path>
                    <path d="M26.877 16.427c-.58.193-.914.545-3.059 3.305-1.221 1.573-2.25 2.856-2.285 2.856-.035 0-.571-.563-1.186-1.257-1.433-1.59-1.653-1.793-2.233-1.96-1.758-.527-3.304 1.319-2.47 2.953.088.167.818 1.037 1.626 1.934 3.481 3.85 3.402 3.78 4.395 3.78.624 0 1.116-.203 1.503-.625.58-.624 2.848-3.621 2.9-3.832.123-.483-.633-.94-1.028-.624-.08.062-.756.914-1.512 1.88-.756.977-1.432 1.794-1.511 1.829-.211.08-.563.062-.73-.026-.22-.123-4.447-4.826-4.526-5.037-.159-.439.299-1.037.8-1.037.263 0 .527.247 2.127 2.022 1.538 1.696 1.748 1.872 2.153 1.687.105-.052 1.274-1.476 2.584-3.172 1.318-1.697 2.496-3.156 2.619-3.261.606-.475 1.441.193 1.134.905-.062.158-.413.66-.774 1.116-.764.967-.835 1.125-.641 1.486.158.307.483.43.782.29.22-.097 1.6-1.802 1.837-2.26.483-.94.096-2.17-.862-2.733-.43-.246-1.221-.351-1.643-.22zM.791 21.463c-.37.395-.132.976.457 1.08.158.027 1.292.045 2.514.027l2.232-.026.211-.246c.255-.299.264-.492.026-.8l-.175-.229h-2.54c-2.505 0-2.55 0-2.725.194zM38.769 21.498c-.238.308-.229.501.026.8l.21.246 2.233.026c1.222.018 2.356 0 2.514-.026.571-.105.817-.694.457-1.081-.176-.194-.22-.194-2.725-.194h-2.54l-.175.23zM10.415 33.135c-.097.035-.94.835-1.863 1.775-1.494 1.503-1.697 1.74-1.697 1.987 0 .369.273.632.642.632.255 0 .475-.193 2.03-1.749 1.53-1.529 1.75-1.784 1.75-2.03 0-.44-.475-.782-.862-.615zM34.145 33.135a.636.636 0 00-.421.624c0 .228.246.518 1.749 2.021 1.555 1.556 1.775 1.75 2.03 1.75.378 0 .642-.264.642-.633 0-.247-.203-.484-1.732-2.013-.958-.958-1.82-1.758-1.916-1.776a.603.603 0 00-.352.027z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2797_63">
                      <path fill="#fff" d="M0 0h45v45H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-[Poppins] text-[1.5rem] text-[#222] font-semibold">
                  Our Success Mission
                </h4>
                <p className="font-[Poppins] text-[#555555] text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex">
            <button className="bg-[#014BAE] text-white font-medium font-[Poppins] px-10 py-3 border border-[#014BAE] rounded-full hover:bg-transparent hover:text-black transition">Discover More</button>

            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
