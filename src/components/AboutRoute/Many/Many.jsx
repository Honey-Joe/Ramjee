
const Many = () => {
  return (
    <>
        <div className="max-w-[100%]">
            <div className="w-[90%] mx-auto grid grid-cols-1 py-[40px] gap-5">
                
                <div className="flex justify-center">
                    <p className="font-[Poppins] text-[18px] text-[#014BAE] font-semibold uppercase">Features</p>
                </div> 
                <div className="flex justify-center">
                    <p className="font-[Poppins] text-[22px] lg:text-[32px] font-bold uppercase">One Platform Many Course</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 ">
                    <div className="border-2 py-24 px-12 flex justify-center gap-4 flex-col items-center relative rounded-lg hover:rounded-tr-[80px] hover:border-[#014BAE] transition-all ">
                        <div className=" absolute top-1 left-10">
                            <span className="rounded-b-lg px-2 py-2 text-white bg-[#014BAE]">01</span>
                        </div>
                        <div className="rounded-full fill-white bg-[#E5F9F9] p-5 group hover:bg-[#014BAE] transition">
                        <div className="w-[40px]">
                            <svg fill="none" viewBox="0 0 37 37" className=""><g clip-path="url(#clip0_2830_373)"><path fill="#0D5FF9" className="group-hover:fill-white   transition" d="M17.488.05c-.997.102-2.312.492-3.252.962-.578.289-1.611.997-1.82 1.243a.538.538 0 00.014.708c.245.246.534.188 1.12-.246a8.573 8.573 0 013.721-1.532c.882-.13 1.496-.13 2.443.015 1.828.267 3.245.968 4.495 2.21.296.297.643.593.766.659.34.173.86.794 1.098 1.3.369.795.448 1.41.448 3.635V11l-.159-.044a3.678 3.678 0 00-.462-.094l-.303-.036-.03-.99c-.021-.607-.072-1.055-.13-1.178-.093-.202-.585-.491-.838-.491-.419 0-1.07-.484-1.575-1.178-.246-.332-.528-.484-.91-.484-.355 0-.456.05-1.12.55-1.75 1.3-3.845 1.85-6.201 1.625-.535-.05-1.12-.072-1.294-.043-.99.166-1.835.91-2.117 1.864-.08.275-.116.31-.369.347-.151.022-.39.065-.513.094l-.238.058v-1.04c0-2.09.303-3.419 1.091-4.77.159-.275.282-.578.282-.701 0-.463-.557-.687-.89-.354-.252.26-.88 1.539-1.126 2.312-.326 1.019-.441 2.096-.441 4.004 0 1.113-.03 1.676-.087 1.785-.043.086-.087.354-.087.592 0 1.048.802 1.908 1.908 2.038.383.043.39.058.47.564.072.462.39 1.394.629 1.871a7.333 7.333 0 002.442 2.768l.506.333v.91l-.665.463c-.643.448-.773.498-3.02 1.279-1.294.448-2.508.896-2.71 1.004-.542.29-1.135.918-1.439 1.532-.238.484-.346.954-1.098 4.69-.752 3.758-.831 4.213-.802 4.77.036.925.34 1.402 1.098 1.749l.362.166 7.898.022 7.892.014.18-.173c.232-.232.232-.506 0-.73l-.173-.181H11.2v-2.558c0-2.472-.007-2.558-.152-2.746-.195-.246-.513-.253-.751-.007l-.18.173v5.138l-1.533-.007c-1.048 0-1.619-.036-1.792-.094-.34-.123-.52-.448-.513-.932 0-.333 1.489-7.906 1.655-8.477.173-.557.592-1.084 1.077-1.344.354-.195 2.68-1.04 2.724-.99l.686 1.264c.658 1.214.81 1.402 1.135 1.402.173 0 .463-.34.463-.542 0-.1-.275-.694-.615-1.308-.34-.621-.614-1.156-.614-1.178 0-.029.173-.108.376-.173.303-.094.397-.101.462-.029.044.043 1.034 1.85 2.197 4.01 1.243 2.306 2.19 3.983 2.291 4.062.267.21.57.188.81-.05.1-.116 1.148-1.966 2.312-4.127 1.163-2.153 2.146-3.931 2.175-3.953.043-.029.708.16.788.224.05.044-4.372 8.166-4.582 8.405a1.511 1.511 0 01-2.218.036c-.109-.116-.644-1.048-1.2-2.074-.557-1.026-1.07-1.93-1.135-2.01-.281-.303-.903-.057-.903.37 0 .281 2.154 4.162 2.508 4.523.621.614 1.604.89 2.471.68.484-.116 1.142-.557 1.424-.954.123-.174 1.228-2.161 2.45-4.43a474.047 474.047 0 012.247-4.148c.043-.05 2.37.795 2.724.99.362.195.738.592.947 1.004.13.268.513 2.053 1.272 5.984.585 3.013.607 3.339.253 3.62-.282.224-.448.246-2.103.246h-1.474v-5.138l-.18-.173c-.24-.246-.557-.239-.752.007-.145.188-.152.274-.152 2.746v2.558h-.578c-.528 0-.6.022-.76.18-.23.225-.23.5 0 .73l.182.181 2.84-.021c2.782-.022 2.84-.022 3.194-.188.759-.347 1.062-.824 1.098-1.75.03-.556-.05-1.004-.802-4.733-.455-2.269-.896-4.3-.976-4.516-.187-.492-.693-1.15-1.148-1.482-.449-.325-.803-.47-3.34-1.344-2.023-.694-2.167-.759-2.796-1.2l-.672-.462V20.256l.42-.275c.917-.614 1.791-1.618 2.326-2.695.268-.528.585-1.525.687-2.132.036-.246.058-.267.289-.267.375 0 .997-.26 1.351-.571.55-.492.817-1.272.629-1.85-.065-.202-.109-1.135-.137-3.18-.058-3.266-.073-3.382-.615-4.488-.332-.672-.881-1.308-1.423-1.654-.13-.087-.485-.398-.788-.694C22.988.7 20.17-.231 17.488.05zm4.958 7.964c.347.492 1.019.969 1.597 1.135l.39.115-.022.969-.021.975-.268.152-.274.16-.195-.189c-.383-.354-.492-.376-1.858-.404-.708-.015-1.46-.008-1.669.021-.44.05-.976.369-1.106.65-.08.167-.115.181-.607.181-.52 0-.527-.007-.686-.253a1.534 1.534 0 00-.47-.412c-.289-.151-.42-.166-1.713-.188-1.575-.028-1.922.022-2.341.362l-.282.217-.253-.13c-.137-.08-.274-.181-.289-.232-.08-.195.137-.686.441-.982.448-.449.752-.514 1.864-.405 2.494.253 5.016-.39 6.815-1.735.318-.23.593-.426.614-.426.022 0 .174.188.333.42zm-11.173 4.857v.953l-.289-.043c-.614-.08-1.04-.65-.867-1.163.123-.376.557-.694.961-.694h.196v.947zm15.01-.767c.224.152.455.528.455.76 0 .23-.23.606-.455.758a1.326 1.326 0 01-.44.159l-.26.043v-1.922l.26.043c.144.022.339.094.44.16zm-9.488.008c.158.152.166 1.387.014 1.684-.202.39-.376.44-1.453.44-1.409 0-1.553-.123-1.553-1.366 0-.614.021-.737.13-.794.072-.044.68-.08 1.438-.08 1.098 0 1.33.022 1.424.116zm6.048-.044c.123.073.137.16.137.875v.802l-.245.246-.246.245h-.983c-.722 0-1.048-.029-1.192-.108-.318-.16-.44-.506-.44-1.236 0-.925-.051-.896 1.531-.896.759 0 1.351.029 1.438.072zM12.72 13.254c.007.925.361 1.532 1.12 1.893.332.159.448.173 1.518.173 1.004 0 1.2-.021 1.48-.152.724-.325 1.157-1.026 1.157-1.871v-.434h.773l.037.528c.057.874.455 1.474 1.192 1.8.282.122.462.136 1.525.115 1.344-.022 1.524-.072 1.987-.542.398-.398.513-.694.542-1.431.022-.491.05-.672.145-.744.065-.044.137-.087.173-.087.029 0 .058.542.058 1.207 0 .96-.03 1.337-.145 1.806a6.119 6.119 0 01-2.818 3.823c-1.424.838-3.339 1.055-4.878.557-1.937-.629-3.41-2.118-3.975-4.033-.173-.578-.202-.802-.23-2.052l-.044-1.395.195.123c.18.116.188.159.188.716zm8.238 7.855c0 .274-.065.361-1.2 1.626-.657.73-1.228 1.33-1.257 1.33-.029 0-.6-.6-1.257-1.33-1.077-1.2-1.2-1.359-1.2-1.59 0-.145.007-.26.022-.26.007 0 .26.065.556.151 1.106.297 2.978.246 3.939-.108.404-.144.397-.152.397.18zm-4.415 2.464c.6.665 1.09 1.236 1.09 1.272 0 .058-1.01.838-1.343 1.04-.058.044-.34-.404-.89-1.423-.44-.817-.801-1.51-.801-1.54.007-.064.744-.592.81-.57.02.007.534.556 1.134 1.221zm5.463-.976c.217.152.39.297.397.333 0 .029-.361.715-.802 1.532-.556 1.019-.83 1.467-.889 1.424-.52-.311-1.344-.99-1.315-1.077.036-.094 2.146-2.479 2.197-2.479.014 0 .202.123.412.267zm-3.201 3.245c.303.217.31.231.187.499-.072.159-.122.18-.491.18s-.42-.021-.491-.18a.904.904 0 01-.087-.246c0-.05.506-.44.57-.44.023 0 .16.086.311.187zm-1.684 1.091c.05.13.058.282.021.42l-.065.216-.159-.31c-.122-.246-.144-.34-.072-.42.123-.144.18-.122.275.094zm3.035-.094c.065.08.058.16-.043.362-.065.144-.145.26-.174.26-.101 0-.137-.354-.05-.535.093-.217.151-.231.267-.087zm-1.127 1.431l.188.586-.34.643c-.188.347-.354.636-.376.636-.022 0-.188-.29-.376-.636l-.34-.643.189-.586.195-.592h.664l.196.592z"></path></g><defs><clipPath id="clip0_2830_373"><path fill="#fff" d="M0 0h37v37H0z"></path></clipPath></defs></svg>
                        </div>

                        </div>
                        
                        <div>
                            <p className="font-[Poppins] text-[18px] lg:text-[24px] text-[#222]">Exclusive Advisor</p>
                        </div>
                        <div>
                            <p className="font-[Poppins] text-gray-400 ">Lorem ipsum dolor <br /> amet consectetur</p>
                        </div>
                    </div>
                    <div className="border-2 py-24 px-12 flex justify-center gap-4 flex-col items-center relative rounded-lg hover:rounded-tr-[80px] hover:border-[#014BAE] transition-all ">
                        <div className=" absolute top-1 left-10">
                            <span className="rounded-b-lg px-2 py-2 text-white bg-[#014BAE]">01</span>
                        </div>
                        <div className="rounded-full fill-white bg-[#E5F9F9] p-5 group hover:bg-[#014BAE] transition">
                        <div className="w-[40px]">
                            <svg fill="none" viewBox="0 0 37 37" className=""><g clip-path="url(#clip0_2830_373)"><path fill="#0D5FF9" className="group-hover:fill-white   transition" d="M17.488.05c-.997.102-2.312.492-3.252.962-.578.289-1.611.997-1.82 1.243a.538.538 0 00.014.708c.245.246.534.188 1.12-.246a8.573 8.573 0 013.721-1.532c.882-.13 1.496-.13 2.443.015 1.828.267 3.245.968 4.495 2.21.296.297.643.593.766.659.34.173.86.794 1.098 1.3.369.795.448 1.41.448 3.635V11l-.159-.044a3.678 3.678 0 00-.462-.094l-.303-.036-.03-.99c-.021-.607-.072-1.055-.13-1.178-.093-.202-.585-.491-.838-.491-.419 0-1.07-.484-1.575-1.178-.246-.332-.528-.484-.91-.484-.355 0-.456.05-1.12.55-1.75 1.3-3.845 1.85-6.201 1.625-.535-.05-1.12-.072-1.294-.043-.99.166-1.835.91-2.117 1.864-.08.275-.116.31-.369.347-.151.022-.39.065-.513.094l-.238.058v-1.04c0-2.09.303-3.419 1.091-4.77.159-.275.282-.578.282-.701 0-.463-.557-.687-.89-.354-.252.26-.88 1.539-1.126 2.312-.326 1.019-.441 2.096-.441 4.004 0 1.113-.03 1.676-.087 1.785-.043.086-.087.354-.087.592 0 1.048.802 1.908 1.908 2.038.383.043.39.058.47.564.072.462.39 1.394.629 1.871a7.333 7.333 0 002.442 2.768l.506.333v.91l-.665.463c-.643.448-.773.498-3.02 1.279-1.294.448-2.508.896-2.71 1.004-.542.29-1.135.918-1.439 1.532-.238.484-.346.954-1.098 4.69-.752 3.758-.831 4.213-.802 4.77.036.925.34 1.402 1.098 1.749l.362.166 7.898.022 7.892.014.18-.173c.232-.232.232-.506 0-.73l-.173-.181H11.2v-2.558c0-2.472-.007-2.558-.152-2.746-.195-.246-.513-.253-.751-.007l-.18.173v5.138l-1.533-.007c-1.048 0-1.619-.036-1.792-.094-.34-.123-.52-.448-.513-.932 0-.333 1.489-7.906 1.655-8.477.173-.557.592-1.084 1.077-1.344.354-.195 2.68-1.04 2.724-.99l.686 1.264c.658 1.214.81 1.402 1.135 1.402.173 0 .463-.34.463-.542 0-.1-.275-.694-.615-1.308-.34-.621-.614-1.156-.614-1.178 0-.029.173-.108.376-.173.303-.094.397-.101.462-.029.044.043 1.034 1.85 2.197 4.01 1.243 2.306 2.19 3.983 2.291 4.062.267.21.57.188.81-.05.1-.116 1.148-1.966 2.312-4.127 1.163-2.153 2.146-3.931 2.175-3.953.043-.029.708.16.788.224.05.044-4.372 8.166-4.582 8.405a1.511 1.511 0 01-2.218.036c-.109-.116-.644-1.048-1.2-2.074-.557-1.026-1.07-1.93-1.135-2.01-.281-.303-.903-.057-.903.37 0 .281 2.154 4.162 2.508 4.523.621.614 1.604.89 2.471.68.484-.116 1.142-.557 1.424-.954.123-.174 1.228-2.161 2.45-4.43a474.047 474.047 0 012.247-4.148c.043-.05 2.37.795 2.724.99.362.195.738.592.947 1.004.13.268.513 2.053 1.272 5.984.585 3.013.607 3.339.253 3.62-.282.224-.448.246-2.103.246h-1.474v-5.138l-.18-.173c-.24-.246-.557-.239-.752.007-.145.188-.152.274-.152 2.746v2.558h-.578c-.528 0-.6.022-.76.18-.23.225-.23.5 0 .73l.182.181 2.84-.021c2.782-.022 2.84-.022 3.194-.188.759-.347 1.062-.824 1.098-1.75.03-.556-.05-1.004-.802-4.733-.455-2.269-.896-4.3-.976-4.516-.187-.492-.693-1.15-1.148-1.482-.449-.325-.803-.47-3.34-1.344-2.023-.694-2.167-.759-2.796-1.2l-.672-.462V20.256l.42-.275c.917-.614 1.791-1.618 2.326-2.695.268-.528.585-1.525.687-2.132.036-.246.058-.267.289-.267.375 0 .997-.26 1.351-.571.55-.492.817-1.272.629-1.85-.065-.202-.109-1.135-.137-3.18-.058-3.266-.073-3.382-.615-4.488-.332-.672-.881-1.308-1.423-1.654-.13-.087-.485-.398-.788-.694C22.988.7 20.17-.231 17.488.05zm4.958 7.964c.347.492 1.019.969 1.597 1.135l.39.115-.022.969-.021.975-.268.152-.274.16-.195-.189c-.383-.354-.492-.376-1.858-.404-.708-.015-1.46-.008-1.669.021-.44.05-.976.369-1.106.65-.08.167-.115.181-.607.181-.52 0-.527-.007-.686-.253a1.534 1.534 0 00-.47-.412c-.289-.151-.42-.166-1.713-.188-1.575-.028-1.922.022-2.341.362l-.282.217-.253-.13c-.137-.08-.274-.181-.289-.232-.08-.195.137-.686.441-.982.448-.449.752-.514 1.864-.405 2.494.253 5.016-.39 6.815-1.735.318-.23.593-.426.614-.426.022 0 .174.188.333.42zm-11.173 4.857v.953l-.289-.043c-.614-.08-1.04-.65-.867-1.163.123-.376.557-.694.961-.694h.196v.947zm15.01-.767c.224.152.455.528.455.76 0 .23-.23.606-.455.758a1.326 1.326 0 01-.44.159l-.26.043v-1.922l.26.043c.144.022.339.094.44.16zm-9.488.008c.158.152.166 1.387.014 1.684-.202.39-.376.44-1.453.44-1.409 0-1.553-.123-1.553-1.366 0-.614.021-.737.13-.794.072-.044.68-.08 1.438-.08 1.098 0 1.33.022 1.424.116zm6.048-.044c.123.073.137.16.137.875v.802l-.245.246-.246.245h-.983c-.722 0-1.048-.029-1.192-.108-.318-.16-.44-.506-.44-1.236 0-.925-.051-.896 1.531-.896.759 0 1.351.029 1.438.072zM12.72 13.254c.007.925.361 1.532 1.12 1.893.332.159.448.173 1.518.173 1.004 0 1.2-.021 1.48-.152.724-.325 1.157-1.026 1.157-1.871v-.434h.773l.037.528c.057.874.455 1.474 1.192 1.8.282.122.462.136 1.525.115 1.344-.022 1.524-.072 1.987-.542.398-.398.513-.694.542-1.431.022-.491.05-.672.145-.744.065-.044.137-.087.173-.087.029 0 .058.542.058 1.207 0 .96-.03 1.337-.145 1.806a6.119 6.119 0 01-2.818 3.823c-1.424.838-3.339 1.055-4.878.557-1.937-.629-3.41-2.118-3.975-4.033-.173-.578-.202-.802-.23-2.052l-.044-1.395.195.123c.18.116.188.159.188.716zm8.238 7.855c0 .274-.065.361-1.2 1.626-.657.73-1.228 1.33-1.257 1.33-.029 0-.6-.6-1.257-1.33-1.077-1.2-1.2-1.359-1.2-1.59 0-.145.007-.26.022-.26.007 0 .26.065.556.151 1.106.297 2.978.246 3.939-.108.404-.144.397-.152.397.18zm-4.415 2.464c.6.665 1.09 1.236 1.09 1.272 0 .058-1.01.838-1.343 1.04-.058.044-.34-.404-.89-1.423-.44-.817-.801-1.51-.801-1.54.007-.064.744-.592.81-.57.02.007.534.556 1.134 1.221zm5.463-.976c.217.152.39.297.397.333 0 .029-.361.715-.802 1.532-.556 1.019-.83 1.467-.889 1.424-.52-.311-1.344-.99-1.315-1.077.036-.094 2.146-2.479 2.197-2.479.014 0 .202.123.412.267zm-3.201 3.245c.303.217.31.231.187.499-.072.159-.122.18-.491.18s-.42-.021-.491-.18a.904.904 0 01-.087-.246c0-.05.506-.44.57-.44.023 0 .16.086.311.187zm-1.684 1.091c.05.13.058.282.021.42l-.065.216-.159-.31c-.122-.246-.144-.34-.072-.42.123-.144.18-.122.275.094zm3.035-.094c.065.08.058.16-.043.362-.065.144-.145.26-.174.26-.101 0-.137-.354-.05-.535.093-.217.151-.231.267-.087zm-1.127 1.431l.188.586-.34.643c-.188.347-.354.636-.376.636-.022 0-.188-.29-.376-.636l-.34-.643.189-.586.195-.592h.664l.196.592z"></path></g><defs><clipPath id="clip0_2830_373"><path fill="#fff" d="M0 0h37v37H0z"></path></clipPath></defs></svg>
                        </div>

                        </div>
                        
                        <div>
                            <p className="font-[Poppins] text-[18px] lg:text-[24px] text-[#222]">Exclusive Advisor</p>
                        </div>
                        <div>
                            <p className="font-[Poppins] text-gray-400 ">Lorem ipsum dolor <br /> amet consectetur</p>
                        </div>
                    </div>
                    <div className="border-2 py-24 px-12 flex justify-center gap-4 flex-col items-center relative rounded-lg hover:rounded-tr-[80px] hover:border-[#014BAE] transition-all ">
                        <div className=" absolute top-1 left-10">
                            <span className="rounded-b-lg px-2 py-2 text-white bg-[#014BAE]">01</span>
                        </div>
                        <div className="rounded-full fill-white bg-[#E5F9F9] p-5 group hover:bg-[#014BAE] transition">
                        <div className="w-[40px]">
                            <svg fill="none" viewBox="0 0 37 37" className=""><g clip-path="url(#clip0_2830_373)"><path fill="#0D5FF9" className="group-hover:fill-white   transition" d="M17.488.05c-.997.102-2.312.492-3.252.962-.578.289-1.611.997-1.82 1.243a.538.538 0 00.014.708c.245.246.534.188 1.12-.246a8.573 8.573 0 013.721-1.532c.882-.13 1.496-.13 2.443.015 1.828.267 3.245.968 4.495 2.21.296.297.643.593.766.659.34.173.86.794 1.098 1.3.369.795.448 1.41.448 3.635V11l-.159-.044a3.678 3.678 0 00-.462-.094l-.303-.036-.03-.99c-.021-.607-.072-1.055-.13-1.178-.093-.202-.585-.491-.838-.491-.419 0-1.07-.484-1.575-1.178-.246-.332-.528-.484-.91-.484-.355 0-.456.05-1.12.55-1.75 1.3-3.845 1.85-6.201 1.625-.535-.05-1.12-.072-1.294-.043-.99.166-1.835.91-2.117 1.864-.08.275-.116.31-.369.347-.151.022-.39.065-.513.094l-.238.058v-1.04c0-2.09.303-3.419 1.091-4.77.159-.275.282-.578.282-.701 0-.463-.557-.687-.89-.354-.252.26-.88 1.539-1.126 2.312-.326 1.019-.441 2.096-.441 4.004 0 1.113-.03 1.676-.087 1.785-.043.086-.087.354-.087.592 0 1.048.802 1.908 1.908 2.038.383.043.39.058.47.564.072.462.39 1.394.629 1.871a7.333 7.333 0 002.442 2.768l.506.333v.91l-.665.463c-.643.448-.773.498-3.02 1.279-1.294.448-2.508.896-2.71 1.004-.542.29-1.135.918-1.439 1.532-.238.484-.346.954-1.098 4.69-.752 3.758-.831 4.213-.802 4.77.036.925.34 1.402 1.098 1.749l.362.166 7.898.022 7.892.014.18-.173c.232-.232.232-.506 0-.73l-.173-.181H11.2v-2.558c0-2.472-.007-2.558-.152-2.746-.195-.246-.513-.253-.751-.007l-.18.173v5.138l-1.533-.007c-1.048 0-1.619-.036-1.792-.094-.34-.123-.52-.448-.513-.932 0-.333 1.489-7.906 1.655-8.477.173-.557.592-1.084 1.077-1.344.354-.195 2.68-1.04 2.724-.99l.686 1.264c.658 1.214.81 1.402 1.135 1.402.173 0 .463-.34.463-.542 0-.1-.275-.694-.615-1.308-.34-.621-.614-1.156-.614-1.178 0-.029.173-.108.376-.173.303-.094.397-.101.462-.029.044.043 1.034 1.85 2.197 4.01 1.243 2.306 2.19 3.983 2.291 4.062.267.21.57.188.81-.05.1-.116 1.148-1.966 2.312-4.127 1.163-2.153 2.146-3.931 2.175-3.953.043-.029.708.16.788.224.05.044-4.372 8.166-4.582 8.405a1.511 1.511 0 01-2.218.036c-.109-.116-.644-1.048-1.2-2.074-.557-1.026-1.07-1.93-1.135-2.01-.281-.303-.903-.057-.903.37 0 .281 2.154 4.162 2.508 4.523.621.614 1.604.89 2.471.68.484-.116 1.142-.557 1.424-.954.123-.174 1.228-2.161 2.45-4.43a474.047 474.047 0 012.247-4.148c.043-.05 2.37.795 2.724.99.362.195.738.592.947 1.004.13.268.513 2.053 1.272 5.984.585 3.013.607 3.339.253 3.62-.282.224-.448.246-2.103.246h-1.474v-5.138l-.18-.173c-.24-.246-.557-.239-.752.007-.145.188-.152.274-.152 2.746v2.558h-.578c-.528 0-.6.022-.76.18-.23.225-.23.5 0 .73l.182.181 2.84-.021c2.782-.022 2.84-.022 3.194-.188.759-.347 1.062-.824 1.098-1.75.03-.556-.05-1.004-.802-4.733-.455-2.269-.896-4.3-.976-4.516-.187-.492-.693-1.15-1.148-1.482-.449-.325-.803-.47-3.34-1.344-2.023-.694-2.167-.759-2.796-1.2l-.672-.462V20.256l.42-.275c.917-.614 1.791-1.618 2.326-2.695.268-.528.585-1.525.687-2.132.036-.246.058-.267.289-.267.375 0 .997-.26 1.351-.571.55-.492.817-1.272.629-1.85-.065-.202-.109-1.135-.137-3.18-.058-3.266-.073-3.382-.615-4.488-.332-.672-.881-1.308-1.423-1.654-.13-.087-.485-.398-.788-.694C22.988.7 20.17-.231 17.488.05zm4.958 7.964c.347.492 1.019.969 1.597 1.135l.39.115-.022.969-.021.975-.268.152-.274.16-.195-.189c-.383-.354-.492-.376-1.858-.404-.708-.015-1.46-.008-1.669.021-.44.05-.976.369-1.106.65-.08.167-.115.181-.607.181-.52 0-.527-.007-.686-.253a1.534 1.534 0 00-.47-.412c-.289-.151-.42-.166-1.713-.188-1.575-.028-1.922.022-2.341.362l-.282.217-.253-.13c-.137-.08-.274-.181-.289-.232-.08-.195.137-.686.441-.982.448-.449.752-.514 1.864-.405 2.494.253 5.016-.39 6.815-1.735.318-.23.593-.426.614-.426.022 0 .174.188.333.42zm-11.173 4.857v.953l-.289-.043c-.614-.08-1.04-.65-.867-1.163.123-.376.557-.694.961-.694h.196v.947zm15.01-.767c.224.152.455.528.455.76 0 .23-.23.606-.455.758a1.326 1.326 0 01-.44.159l-.26.043v-1.922l.26.043c.144.022.339.094.44.16zm-9.488.008c.158.152.166 1.387.014 1.684-.202.39-.376.44-1.453.44-1.409 0-1.553-.123-1.553-1.366 0-.614.021-.737.13-.794.072-.044.68-.08 1.438-.08 1.098 0 1.33.022 1.424.116zm6.048-.044c.123.073.137.16.137.875v.802l-.245.246-.246.245h-.983c-.722 0-1.048-.029-1.192-.108-.318-.16-.44-.506-.44-1.236 0-.925-.051-.896 1.531-.896.759 0 1.351.029 1.438.072zM12.72 13.254c.007.925.361 1.532 1.12 1.893.332.159.448.173 1.518.173 1.004 0 1.2-.021 1.48-.152.724-.325 1.157-1.026 1.157-1.871v-.434h.773l.037.528c.057.874.455 1.474 1.192 1.8.282.122.462.136 1.525.115 1.344-.022 1.524-.072 1.987-.542.398-.398.513-.694.542-1.431.022-.491.05-.672.145-.744.065-.044.137-.087.173-.087.029 0 .058.542.058 1.207 0 .96-.03 1.337-.145 1.806a6.119 6.119 0 01-2.818 3.823c-1.424.838-3.339 1.055-4.878.557-1.937-.629-3.41-2.118-3.975-4.033-.173-.578-.202-.802-.23-2.052l-.044-1.395.195.123c.18.116.188.159.188.716zm8.238 7.855c0 .274-.065.361-1.2 1.626-.657.73-1.228 1.33-1.257 1.33-.029 0-.6-.6-1.257-1.33-1.077-1.2-1.2-1.359-1.2-1.59 0-.145.007-.26.022-.26.007 0 .26.065.556.151 1.106.297 2.978.246 3.939-.108.404-.144.397-.152.397.18zm-4.415 2.464c.6.665 1.09 1.236 1.09 1.272 0 .058-1.01.838-1.343 1.04-.058.044-.34-.404-.89-1.423-.44-.817-.801-1.51-.801-1.54.007-.064.744-.592.81-.57.02.007.534.556 1.134 1.221zm5.463-.976c.217.152.39.297.397.333 0 .029-.361.715-.802 1.532-.556 1.019-.83 1.467-.889 1.424-.52-.311-1.344-.99-1.315-1.077.036-.094 2.146-2.479 2.197-2.479.014 0 .202.123.412.267zm-3.201 3.245c.303.217.31.231.187.499-.072.159-.122.18-.491.18s-.42-.021-.491-.18a.904.904 0 01-.087-.246c0-.05.506-.44.57-.44.023 0 .16.086.311.187zm-1.684 1.091c.05.13.058.282.021.42l-.065.216-.159-.31c-.122-.246-.144-.34-.072-.42.123-.144.18-.122.275.094zm3.035-.094c.065.08.058.16-.043.362-.065.144-.145.26-.174.26-.101 0-.137-.354-.05-.535.093-.217.151-.231.267-.087zm-1.127 1.431l.188.586-.34.643c-.188.347-.354.636-.376.636-.022 0-.188-.29-.376-.636l-.34-.643.189-.586.195-.592h.664l.196.592z"></path></g><defs><clipPath id="clip0_2830_373"><path fill="#fff" d="M0 0h37v37H0z"></path></clipPath></defs></svg>
                        </div>

                        </div>
                        
                        <div>
                            <p className="font-[Poppins] text-[18px] lg:text-[24px] text-[#222]">Exclusive Advisor</p>
                        </div>
                        <div>
                            <p className="font-[Poppins] text-gray-400 ">Lorem ipsum dolor <br /> amet consectetur</p>
                        </div>
                    </div>
                    <div className="border-2 py-24 px-12 flex justify-center gap-4 flex-col items-center relative rounded-lg hover:rounded-tr-[80px] hover:border-[#014BAE] transition-all ">
                        <div className=" absolute top-1 left-10">
                            <span className="rounded-b-lg px-2 py-2 text-white bg-[#014BAE]">01</span>
                        </div>
                        <div className="rounded-full fill-white bg-[#E5F9F9] p-5 group hover:bg-[#014BAE] transition">
                        <div className="w-[40px]">
                            <svg fill="none" viewBox="0 0 37 37" className=""><g clip-path="url(#clip0_2830_373)"><path fill="#0D5FF9" className="group-hover:fill-white   transition" d="M17.488.05c-.997.102-2.312.492-3.252.962-.578.289-1.611.997-1.82 1.243a.538.538 0 00.014.708c.245.246.534.188 1.12-.246a8.573 8.573 0 013.721-1.532c.882-.13 1.496-.13 2.443.015 1.828.267 3.245.968 4.495 2.21.296.297.643.593.766.659.34.173.86.794 1.098 1.3.369.795.448 1.41.448 3.635V11l-.159-.044a3.678 3.678 0 00-.462-.094l-.303-.036-.03-.99c-.021-.607-.072-1.055-.13-1.178-.093-.202-.585-.491-.838-.491-.419 0-1.07-.484-1.575-1.178-.246-.332-.528-.484-.91-.484-.355 0-.456.05-1.12.55-1.75 1.3-3.845 1.85-6.201 1.625-.535-.05-1.12-.072-1.294-.043-.99.166-1.835.91-2.117 1.864-.08.275-.116.31-.369.347-.151.022-.39.065-.513.094l-.238.058v-1.04c0-2.09.303-3.419 1.091-4.77.159-.275.282-.578.282-.701 0-.463-.557-.687-.89-.354-.252.26-.88 1.539-1.126 2.312-.326 1.019-.441 2.096-.441 4.004 0 1.113-.03 1.676-.087 1.785-.043.086-.087.354-.087.592 0 1.048.802 1.908 1.908 2.038.383.043.39.058.47.564.072.462.39 1.394.629 1.871a7.333 7.333 0 002.442 2.768l.506.333v.91l-.665.463c-.643.448-.773.498-3.02 1.279-1.294.448-2.508.896-2.71 1.004-.542.29-1.135.918-1.439 1.532-.238.484-.346.954-1.098 4.69-.752 3.758-.831 4.213-.802 4.77.036.925.34 1.402 1.098 1.749l.362.166 7.898.022 7.892.014.18-.173c.232-.232.232-.506 0-.73l-.173-.181H11.2v-2.558c0-2.472-.007-2.558-.152-2.746-.195-.246-.513-.253-.751-.007l-.18.173v5.138l-1.533-.007c-1.048 0-1.619-.036-1.792-.094-.34-.123-.52-.448-.513-.932 0-.333 1.489-7.906 1.655-8.477.173-.557.592-1.084 1.077-1.344.354-.195 2.68-1.04 2.724-.99l.686 1.264c.658 1.214.81 1.402 1.135 1.402.173 0 .463-.34.463-.542 0-.1-.275-.694-.615-1.308-.34-.621-.614-1.156-.614-1.178 0-.029.173-.108.376-.173.303-.094.397-.101.462-.029.044.043 1.034 1.85 2.197 4.01 1.243 2.306 2.19 3.983 2.291 4.062.267.21.57.188.81-.05.1-.116 1.148-1.966 2.312-4.127 1.163-2.153 2.146-3.931 2.175-3.953.043-.029.708.16.788.224.05.044-4.372 8.166-4.582 8.405a1.511 1.511 0 01-2.218.036c-.109-.116-.644-1.048-1.2-2.074-.557-1.026-1.07-1.93-1.135-2.01-.281-.303-.903-.057-.903.37 0 .281 2.154 4.162 2.508 4.523.621.614 1.604.89 2.471.68.484-.116 1.142-.557 1.424-.954.123-.174 1.228-2.161 2.45-4.43a474.047 474.047 0 012.247-4.148c.043-.05 2.37.795 2.724.99.362.195.738.592.947 1.004.13.268.513 2.053 1.272 5.984.585 3.013.607 3.339.253 3.62-.282.224-.448.246-2.103.246h-1.474v-5.138l-.18-.173c-.24-.246-.557-.239-.752.007-.145.188-.152.274-.152 2.746v2.558h-.578c-.528 0-.6.022-.76.18-.23.225-.23.5 0 .73l.182.181 2.84-.021c2.782-.022 2.84-.022 3.194-.188.759-.347 1.062-.824 1.098-1.75.03-.556-.05-1.004-.802-4.733-.455-2.269-.896-4.3-.976-4.516-.187-.492-.693-1.15-1.148-1.482-.449-.325-.803-.47-3.34-1.344-2.023-.694-2.167-.759-2.796-1.2l-.672-.462V20.256l.42-.275c.917-.614 1.791-1.618 2.326-2.695.268-.528.585-1.525.687-2.132.036-.246.058-.267.289-.267.375 0 .997-.26 1.351-.571.55-.492.817-1.272.629-1.85-.065-.202-.109-1.135-.137-3.18-.058-3.266-.073-3.382-.615-4.488-.332-.672-.881-1.308-1.423-1.654-.13-.087-.485-.398-.788-.694C22.988.7 20.17-.231 17.488.05zm4.958 7.964c.347.492 1.019.969 1.597 1.135l.39.115-.022.969-.021.975-.268.152-.274.16-.195-.189c-.383-.354-.492-.376-1.858-.404-.708-.015-1.46-.008-1.669.021-.44.05-.976.369-1.106.65-.08.167-.115.181-.607.181-.52 0-.527-.007-.686-.253a1.534 1.534 0 00-.47-.412c-.289-.151-.42-.166-1.713-.188-1.575-.028-1.922.022-2.341.362l-.282.217-.253-.13c-.137-.08-.274-.181-.289-.232-.08-.195.137-.686.441-.982.448-.449.752-.514 1.864-.405 2.494.253 5.016-.39 6.815-1.735.318-.23.593-.426.614-.426.022 0 .174.188.333.42zm-11.173 4.857v.953l-.289-.043c-.614-.08-1.04-.65-.867-1.163.123-.376.557-.694.961-.694h.196v.947zm15.01-.767c.224.152.455.528.455.76 0 .23-.23.606-.455.758a1.326 1.326 0 01-.44.159l-.26.043v-1.922l.26.043c.144.022.339.094.44.16zm-9.488.008c.158.152.166 1.387.014 1.684-.202.39-.376.44-1.453.44-1.409 0-1.553-.123-1.553-1.366 0-.614.021-.737.13-.794.072-.044.68-.08 1.438-.08 1.098 0 1.33.022 1.424.116zm6.048-.044c.123.073.137.16.137.875v.802l-.245.246-.246.245h-.983c-.722 0-1.048-.029-1.192-.108-.318-.16-.44-.506-.44-1.236 0-.925-.051-.896 1.531-.896.759 0 1.351.029 1.438.072zM12.72 13.254c.007.925.361 1.532 1.12 1.893.332.159.448.173 1.518.173 1.004 0 1.2-.021 1.48-.152.724-.325 1.157-1.026 1.157-1.871v-.434h.773l.037.528c.057.874.455 1.474 1.192 1.8.282.122.462.136 1.525.115 1.344-.022 1.524-.072 1.987-.542.398-.398.513-.694.542-1.431.022-.491.05-.672.145-.744.065-.044.137-.087.173-.087.029 0 .058.542.058 1.207 0 .96-.03 1.337-.145 1.806a6.119 6.119 0 01-2.818 3.823c-1.424.838-3.339 1.055-4.878.557-1.937-.629-3.41-2.118-3.975-4.033-.173-.578-.202-.802-.23-2.052l-.044-1.395.195.123c.18.116.188.159.188.716zm8.238 7.855c0 .274-.065.361-1.2 1.626-.657.73-1.228 1.33-1.257 1.33-.029 0-.6-.6-1.257-1.33-1.077-1.2-1.2-1.359-1.2-1.59 0-.145.007-.26.022-.26.007 0 .26.065.556.151 1.106.297 2.978.246 3.939-.108.404-.144.397-.152.397.18zm-4.415 2.464c.6.665 1.09 1.236 1.09 1.272 0 .058-1.01.838-1.343 1.04-.058.044-.34-.404-.89-1.423-.44-.817-.801-1.51-.801-1.54.007-.064.744-.592.81-.57.02.007.534.556 1.134 1.221zm5.463-.976c.217.152.39.297.397.333 0 .029-.361.715-.802 1.532-.556 1.019-.83 1.467-.889 1.424-.52-.311-1.344-.99-1.315-1.077.036-.094 2.146-2.479 2.197-2.479.014 0 .202.123.412.267zm-3.201 3.245c.303.217.31.231.187.499-.072.159-.122.18-.491.18s-.42-.021-.491-.18a.904.904 0 01-.087-.246c0-.05.506-.44.57-.44.023 0 .16.086.311.187zm-1.684 1.091c.05.13.058.282.021.42l-.065.216-.159-.31c-.122-.246-.144-.34-.072-.42.123-.144.18-.122.275.094zm3.035-.094c.065.08.058.16-.043.362-.065.144-.145.26-.174.26-.101 0-.137-.354-.05-.535.093-.217.151-.231.267-.087zm-1.127 1.431l.188.586-.34.643c-.188.347-.354.636-.376.636-.022 0-.188-.29-.376-.636l-.34-.643.189-.586.195-.592h.664l.196.592z"></path></g><defs><clipPath id="clip0_2830_373"><path fill="#fff" d="M0 0h37v37H0z"></path></clipPath></defs></svg>
                        </div>

                        </div>
                        
                        <div>
                            <p className="font-[Poppins] text-[18px] lg:text-[24px] text-[#222]">Exclusive Advisor</p>
                        </div>
                        <div>
                            <p className="font-[Poppins] text-gray-400 ">Lorem ipsum dolor <br /> amet consectetur</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
      
    </>
  )
}

export default Many
