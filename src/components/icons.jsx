export const Icons = {
  spinner: (props) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M21 12a9 9 0 1 1-6.219-8.56' />
    </svg>
  ),

  eye: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='w-4 h-4'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
      />
    </svg>
  ),

  eyeSlash: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='#bbb'
      className='w-4 h-4'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
      />
    </svg>
  ),
  plus: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      className='size-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
      />
    </svg>
  ),
  trash: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      className='size-5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
      />
    </svg>
  ),

  logout: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='w-5 h-5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75'
      />
    </svg>
  ),

  question: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='#595959'
      className='w-5 h-5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
      />
    </svg>
  ),

  whatsapp: () => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 512 512'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_62_9)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M391.599 119.804C355.663 83.8375 307.87 64.0202 256.953 64C152.039 64 66.6524 149.354 66.6104 254.269C66.5964 287.805 75.3615 320.541 92.0174 349.396L65.0144 448L165.918 421.54C193.719 436.699 225.02 444.687 256.877 444.701H256.955C361.858 444.701 447.253 359.336 447.296 254.421C447.316 203.578 427.536 155.77 391.599 119.804ZM256.955 412.563H256.891C228.503 412.552 200.659 404.928 176.37 390.519L170.592 387.091L110.716 402.793L126.698 344.432L122.936 338.448C107.1 313.267 98.7351 284.163 98.7476 254.281C98.7823 167.08 169.753 96.1372 257.018 96.1372C299.274 96.1533 338.996 112.626 368.865 142.519C398.735 172.413 415.175 212.149 415.159 254.408C415.123 341.615 344.153 412.563 256.955 412.563ZM343.734 294.115C338.977 291.735 315.595 280.232 311.235 278.646C306.876 277.059 303.706 276.266 300.534 281.026C297.364 285.785 288.25 296.495 285.474 299.668C282.701 302.841 279.927 303.238 275.17 300.858C270.415 298.478 255.09 293.458 236.924 277.26C222.786 264.654 213.24 249.083 210.466 244.323C207.692 239.563 210.171 236.99 212.552 234.62C214.691 232.49 217.308 229.067 219.686 226.29C222.064 223.514 222.856 221.531 224.441 218.358C226.027 215.185 225.234 212.408 224.045 210.028C222.856 207.649 213.345 184.246 209.381 174.727C205.521 165.456 201.6 166.71 198.681 166.565C195.91 166.427 192.736 166.398 189.566 166.398C186.395 166.398 181.243 167.588 176.883 172.347C172.524 177.107 160.238 188.61 160.238 212.011C160.238 235.413 177.279 258.021 179.658 261.194C182.035 264.368 213.194 312.391 260.903 332.986C272.25 337.884 281.109 340.809 288.016 343.002C299.41 346.619 309.777 346.109 317.972 344.885C327.11 343.52 346.111 333.383 350.074 322.277C354.038 311.171 354.038 301.651 352.849 299.668C351.66 297.685 348.489 296.495 343.734 294.115Z'
          fill='#101010'
        />
      </g>
      <defs>
        <clipPath id='clip0_62_9'>
          <rect
            width='382.31'
            height='384'
            fill='white'
            transform='translate(65 64)'
          />
        </clipPath>
      </defs>
    </svg>
  ),

  twitter: () => (
    <svg
      width='22'
      height='22'
      viewBox='0 0 512 512'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M201.403 268.289L37 64H167.219L268.704 190.265L377.124 64.5685H448.842L303.379 233.408L475.857 448H346.027L236.14 311.453L118.824 447.621H46.7178L201.403 268.289ZM364.951 410.149L116.846 101.851H148.281L396.073 410.149H364.951Z'
        fill='#101010'
      />
    </svg>
  ),

  youtube: () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.792 5.41471C20.6521 5.64577 21.3325 6.32614 21.5635 7.18621C21.9872 8.75232 22 12.0001 22 12.0001C22 12.0001 22 15.2607 21.5764 16.8139C21.3453 17.674 20.665 18.3544 19.8049 18.5854C18.2516 19.0091 12 19.0091 12 19.0091C12 19.0091 5.74839 19.0091 4.19512 18.5854C3.33504 18.3544 2.65469 17.674 2.42362 16.8139C2 15.2478 2 12.0001 2 12.0001C2 12.0001 2 8.75232 2.41078 7.19905C2.64185 6.33897 3.32221 5.65861 4.18229 5.42755C5.73556 5.00392 11.9872 4.99109 11.9872 4.99109C11.9872 4.99109 18.2388 4.99109 19.792 5.41471ZM15.1836 12.0001L9.99743 15.0039V8.99623L15.1836 12.0001Z'
        fill='black'
      />
    </svg>
  ),

  facebook: () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M22 12.0607C22 6.504 17.5233 2 12 2C6.47667 2 2 6.504 2 12.0607C2 17.0833 5.656 21.2453 10.4373 22V14.9693H7.89867V12.06H10.4373V9.844C10.4373 7.32267 11.93 5.92933 14.2147 5.92933C15.308 5.92933 16.4533 6.126 16.4533 6.126V8.602H15.1913C13.9493 8.602 13.5627 9.378 13.5627 10.174V12.0607H16.336L15.8927 14.9687H13.5627V22C18.344 21.2453 22 17.0833 22 12.0607Z'
        fill='black'
      />
    </svg>
  ),

  global: () => (
    <svg
      width='22'
      height='22'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.2125 12L7.50234 12L8.2125 12ZM15.7875 12L16.4977 12L15.7875 12ZM12 15.7875L12 16.4977L12 15.7875ZM13.9595 21.2658L14.1057 21.9607L13.9595 21.2658ZM10.0405 21.2658L9.8943 21.9607L10.0405 21.2658ZM3.23062 8.42194L2.57319 8.15342L2.57319 8.15342L3.23062 8.42194ZM2.73424 13.9595L2.0393 14.1057L2.0393 14.1057L2.73424 13.9595ZM10.0405 2.73424L9.8943 2.03931L10.0405 2.73424ZM13.9595 2.73424L14.1057 2.03931L13.9595 2.73424ZM20.6931 8.45611L20.8992 9.13569L20.6931 8.45611ZM3.30576 8.45577L3.09963 9.13535L3.30576 8.45577ZM20.1129 8.69286C20.529 9.71234 20.7586 10.8285 20.7586 12H22.1789C22.1789 10.6413 21.9123 9.34314 21.4279 8.15621L20.1129 8.69286ZM20.7586 12C20.7586 12.6224 20.6938 13.2288 20.5708 13.8132L21.9607 14.1057C22.1038 13.4257 22.1789 12.7212 22.1789 12H20.7586ZM20.5708 13.8132C19.8593 17.1947 17.1947 19.8593 13.8132 20.5708L14.1057 21.9607C18.0382 21.1332 21.1332 18.0382 21.9607 14.1057L20.5708 13.8132ZM13.8132 20.5708C13.2288 20.6938 12.6224 20.7586 12 20.7586V22.1789C12.7212 22.1789 13.4257 22.1038 14.1057 21.9607L13.8132 20.5708ZM12 20.7586C11.3776 20.7586 10.7712 20.6938 10.1868 20.5708L9.8943 21.9607C10.5743 22.1038 11.2788 22.1789 12 22.1789V20.7586ZM3.24141 12C3.24141 10.8276 3.47139 9.71059 3.88805 8.69046L2.57319 8.15342C2.08809 9.3411 1.82109 10.6403 1.82109 12H3.24141ZM10.1868 20.5708C6.80527 19.8593 4.14071 17.1947 3.42918 13.8132L2.0393 14.1057C2.86678 18.0382 5.96182 21.1332 9.8943 21.9607L10.1868 20.5708ZM3.42918 13.8132C3.30621 13.2288 3.24141 12.6224 3.24141 12H1.82109C1.82109 12.7212 1.89622 13.4257 2.0393 14.1057L3.42918 13.8132ZM3.88805 8.69046C4.97252 6.0353 7.32325 4.03172 10.1868 3.42918L9.8943 2.03931C6.56244 2.7404 3.83307 5.06878 2.57319 8.15342L3.88805 8.69046ZM10.1868 3.42918C10.7712 3.30621 11.3776 3.24141 12 3.24141V1.82109C11.2788 1.82109 10.5743 1.89621 9.8943 2.03931L10.1868 3.42918ZM12 3.24141C12.6224 3.24141 13.2288 3.30621 13.8132 3.42918L14.1057 2.03931C13.4257 1.89622 12.7212 1.82109 12 1.82109V3.24141ZM13.8132 3.42918C16.6776 4.03191 19.0289 6.0365 20.1129 8.69286L21.4279 8.15621C20.1686 5.07018 17.4386 2.74061 14.1057 2.03931L13.8132 3.42918ZM13.2829 2.95012C13.5442 3.76893 14.5113 6.91817 14.9077 9.81163L16.3149 9.61886C15.9008 6.59663 14.9012 3.34942 14.636 2.51837L13.2829 2.95012ZM14.9077 9.81163C15.0139 10.5871 15.0773 11.3318 15.0773 12L16.4977 12C16.4977 11.2478 16.4267 10.4354 16.3149 9.61886L14.9077 9.81163ZM20.487 7.77652C19.4478 8.09171 17.496 8.64526 15.4824 9.01688L15.7402 10.4136C17.8286 10.0282 19.8376 9.45769 20.8992 9.13569L20.487 7.77652ZM15.4824 9.01688C14.2609 9.24232 13.0412 9.39609 12 9.39609L12 10.8164C13.1639 10.8164 14.4788 10.6464 15.7402 10.4136L15.4824 9.01688ZM15.0773 12C15.0773 12.9899 14.9383 14.142 14.7305 15.3045L16.1286 15.5545C16.3437 14.3514 16.4977 13.1077 16.4977 12L15.0773 12ZM14.7305 15.3045C14.2748 17.8528 13.5094 20.3401 13.2829 21.0499L14.636 21.4816C14.8684 20.7532 15.6564 18.1956 16.1286 15.5545L14.7305 15.3045ZM21.0499 13.2829C20.3401 13.5094 17.8528 14.2748 15.3045 14.7304L15.5545 16.1286C18.1956 15.6564 20.7532 14.8684 21.4816 14.636L21.0499 13.2829ZM15.3045 14.7304C14.142 14.9383 12.9899 15.0773 12 15.0773L12 16.4977C13.1077 16.4977 14.3514 16.3437 15.5545 16.1286L15.3045 14.7304ZM12 15.0773C11.0101 15.0773 9.85804 14.9383 8.69547 14.7304L8.44549 16.1286C9.64863 16.3437 10.8923 16.4977 12 16.4977L12 15.0773ZM8.69547 14.7304C6.14724 14.2748 3.6599 13.5094 2.95012 13.2829L2.51837 14.636C3.24679 14.8684 5.80444 15.6564 8.44549 16.1286L8.69547 14.7304ZM7.50234 12C7.50234 13.1077 7.65629 14.3514 7.87141 15.5545L9.26955 15.3045C9.06169 14.142 8.92266 12.9899 8.92266 12L7.50234 12ZM7.87141 15.5545C8.34362 18.1956 9.13156 20.7532 9.36398 21.4816L10.7171 21.0499C10.4906 20.3401 9.72517 17.8528 9.26955 15.3045L7.87141 15.5545ZM9.36398 2.51837C9.09881 3.34942 8.09916 6.59663 7.68513 9.61886L9.0923 9.81163C9.48869 6.91817 10.4558 3.76893 10.7171 2.95012L9.36398 2.51837ZM7.68513 9.61886C7.57327 10.4354 7.50234 11.2478 7.50234 12L8.92266 12C8.92266 11.3318 8.98607 10.5871 9.0923 9.81163L7.68513 9.61886ZM12 9.39609C10.9588 9.39609 9.73909 9.24232 8.5176 9.01688L8.25983 10.4136C9.52119 10.6464 10.8361 10.8164 12 10.8164L12 9.39609ZM8.5176 9.01688C6.50329 8.64513 4.5508 8.09132 3.5119 7.77619L3.09963 9.13535C4.16096 9.45728 6.17066 10.028 8.25983 10.4136L8.5176 9.01688ZM20.4432 7.79428C20.4557 7.78775 20.4708 7.78144 20.487 7.77652L20.8992 9.13569C20.9693 9.11445 21.0352 9.08724 21.0977 9.05479L20.4432 7.79428ZM2.86011 9.02779C2.9337 9.07279 3.01358 9.10925 3.09963 9.13535L3.5119 7.77619C3.54472 7.78614 3.57499 7.80011 3.60113 7.8161L2.86011 9.02779Z'
        fill='#2D264B'
      />
    </svg>
  ),

  linkedin: () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M21 4.32353V19.6765C21 20.0275 20.8606 20.3641 20.6123 20.6123C20.3641 20.8606 20.0275 21 19.6765 21H4.32353C3.97251 21 3.63586 20.8606 3.38765 20.6123C3.13944 20.3641 3 20.0275 3 19.6765V4.32353C3 3.97251 3.13944 3.63586 3.38765 3.38765C3.63586 3.13944 3.97251 3 4.32353 3H19.6765C20.0275 3 20.3641 3.13944 20.6123 3.38765C20.8606 3.63586 21 3.97251 21 4.32353ZM8.29412 9.88235H5.64706V18.3529H8.29412V9.88235ZM8.53235 6.97059C8.53375 6.77036 8.49569 6.57182 8.42035 6.3863C8.34502 6.20078 8.23387 6.03191 8.09328 5.88935C7.95268 5.74678 7.78537 5.6333 7.60091 5.5554C7.41646 5.47749 7.21846 5.43668 7.01824 5.43529H6.97059C6.5634 5.43529 6.17289 5.59705 5.88497 5.88497C5.59705 6.17289 5.43529 6.5634 5.43529 6.97059C5.43529 7.37777 5.59705 7.76828 5.88497 8.05621C6.17289 8.34413 6.5634 8.50588 6.97059 8.50588C7.17083 8.51081 7.37008 8.47623 7.55696 8.40413C7.74383 8.33202 7.91467 8.2238 8.0597 8.08565C8.20474 7.94749 8.32113 7.78212 8.40223 7.59897C8.48333 7.41582 8.52755 7.21848 8.53235 7.01824V6.97059ZM18.3529 13.2071C18.3529 10.6606 16.7329 9.67059 15.1235 9.67059C14.5966 9.6442 14.0719 9.75644 13.6019 9.9961C13.1318 10.2358 12.7328 10.5945 12.4447 11.0365H12.3706V9.88235H9.88235V18.3529H12.5294V13.8476C12.4911 13.3862 12.6365 12.9283 12.9339 12.5735C13.2313 12.2186 13.6567 11.9954 14.1176 11.9524H14.2182C15.06 11.9524 15.6847 12.4818 15.6847 13.8159V18.3529H18.3318L18.3529 13.2071Z'
        fill='black'
      />
    </svg>
  ),

  instagram: () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 3C9.5556 3 9.2496 3.0102 8.2896 3.054C7.3314 3.0978 6.6768 3.2502 6.1044 3.4728C5.5044 3.6984 4.9602 4.0524 4.5102 4.5108C4.05253 4.96028 3.69831 5.5041 3.4722 6.1044C3.2508 6.6768 3.0978 7.332 3.054 8.2902C3.0108 9.2496 3 9.555 3 12C3 14.445 3.0102 14.7504 3.054 15.7104C3.0978 16.6686 3.2502 17.3232 3.4728 17.8956C3.6984 18.4956 4.0524 19.0398 4.5108 19.4898C4.96029 19.9475 5.50411 20.3017 6.1044 20.5278C6.6768 20.7498 7.3314 20.9022 8.2896 20.946C9.2496 20.9898 9.5556 21 12 21C14.4444 21 14.7504 20.9898 15.7104 20.946C16.6686 20.9022 17.3232 20.7498 17.8956 20.5272C18.4956 20.3016 19.0398 19.9476 19.4898 19.4892C19.9475 19.0397 20.3017 18.4959 20.5278 17.8956C20.7498 17.3232 20.9022 16.6686 20.946 15.7104C20.9898 14.7504 21 14.4444 21 12C21 9.5556 20.9898 9.2496 20.946 8.2896C20.9022 7.3314 20.7498 6.6768 20.5272 6.1044C20.3012 5.50384 19.947 4.95979 19.4892 4.5102C19.0397 4.05253 18.4959 3.69831 17.8956 3.4722C17.3232 3.2508 16.668 3.0978 15.7098 3.054C14.7504 3.0108 14.445 3 12 3ZM12 4.6218C14.403 4.6218 14.688 4.6308 15.6372 4.674C16.5144 4.7142 16.9908 4.86 17.3082 4.9842C17.7282 5.1468 18.0282 5.3424 18.3432 5.6568C18.6582 5.9718 18.8532 6.2718 19.0158 6.6918C19.1394 7.0092 19.2858 7.4856 19.326 8.3628C19.3692 9.312 19.3782 9.597 19.3782 12C19.3782 14.403 19.3692 14.688 19.326 15.6372C19.2858 16.5144 19.14 16.9908 19.0158 17.3082C18.8718 17.6991 18.6419 18.0528 18.3432 18.3432C18.0528 18.642 17.6992 18.8718 17.3082 19.0158C16.9908 19.1394 16.5144 19.2858 15.6372 19.326C14.688 19.3692 14.4036 19.3782 12 19.3782C9.5964 19.3782 9.312 19.3692 8.3628 19.326C7.4856 19.2858 7.0092 19.14 6.6918 19.0158C6.30087 18.8718 5.9472 18.6419 5.6568 18.3432C5.35811 18.0528 5.12828 17.6991 4.9842 17.3082C4.8606 16.9908 4.7142 16.5144 4.674 15.6372C4.6308 14.688 4.6218 14.403 4.6218 12C4.6218 9.597 4.6308 9.312 4.674 8.3628C4.7142 7.4856 4.86 7.0092 4.9842 6.6918C5.1468 6.2718 5.3424 5.9718 5.6568 5.6568C5.94716 5.35803 6.30085 5.12819 6.6918 4.9842C7.0092 4.8606 7.4856 4.7142 8.3628 4.674C9.312 4.6308 9.597 4.6218 12 4.6218Z'
        fill='black'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 15.003C11.6057 15.003 11.2152 14.9254 10.8508 14.7744C10.4865 14.6235 10.1554 14.4023 9.87658 14.1235C9.59773 13.8446 9.37653 13.5136 9.22561 13.1492C9.0747 12.7849 8.99702 12.3944 8.99702 12C8.99702 11.6057 9.0747 11.2152 9.22561 10.8508C9.37653 10.4865 9.59773 10.1554 9.87658 9.87659C10.1554 9.59774 10.4865 9.37654 10.8508 9.22562C11.2152 9.07471 11.6057 8.99703 12 8.99703C12.7965 8.99703 13.5603 9.31342 14.1235 9.87659C14.6866 10.4398 15.003 11.2036 15.003 12C15.003 12.7965 14.6866 13.5603 14.1235 14.1235C13.5603 14.6866 12.7965 15.003 12 15.003ZM12 7.37403C10.7731 7.37403 9.59649 7.86141 8.72895 8.72896C7.8614 9.5965 7.37402 10.7731 7.37402 12C7.37402 13.2269 7.8614 14.4036 8.72895 15.2711C9.59649 16.1387 10.7731 16.626 12 16.626C13.2269 16.626 14.4036 16.1387 15.2711 15.2711C16.1386 14.4036 16.626 13.2269 16.626 12C16.626 10.7731 16.1386 9.5965 15.2711 8.72896C14.4036 7.86141 13.2269 7.37403 12 7.37403ZM17.9718 7.29003C17.9718 7.58005 17.8566 7.85818 17.6515 8.06325C17.4465 8.26833 17.1683 8.38353 16.8783 8.38353C16.5883 8.38353 16.3102 8.26833 16.1051 8.06325C15.9 7.85818 15.7848 7.58005 15.7848 7.29003C15.7848 7.00002 15.9 6.72188 16.1051 6.51681C16.3102 6.31174 16.5883 6.19653 16.8783 6.19653C17.1683 6.19653 17.4465 6.31174 17.6515 6.51681C17.8566 6.72188 17.9718 7.00002 17.9718 7.29003Z'
        fill='black'
      />
    </svg>
  ),
};
