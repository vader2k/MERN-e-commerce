

const DescriptionBox = () => {
  return (
    <div className="my-[100px] mx-[150px]">
      <div className="flex gap-3">
        <div className="flex items-center justify-center text-[14px] font-bold w-[150px] h-[50px] border border-[#d0d0d0]">Description</div>
        <div className="flex items-center justify-center text-[14px] font-bold w-[150px] h-[50px] border border-[#d0d0d0] bg-[#FBFBFB] text-[#555]">Reviews (122)</div>
      </div>

      <div className="flex flex-col gap-[25px] border p-[48px]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officia ullam officiis deserunt minima, labore sint molestias. Assumenda quod tempore culpa necessitatibus dolore libero cumque a non possimus! Repudiandae, nostrum.</p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, numquam!
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
