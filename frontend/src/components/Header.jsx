export default function Header() {
    return (
        <>
            <section className=" bg-primary-blue text-primary-white flex row justify-between px-5 py-4 rounded-b-2xl">
                <h1 className="text-2xl font-bold">Avengers Character Manager</h1>
                <div className="flex row justify-center items-center gap-3">
                    <i class='bxr  bx-plus-circle text-[20px] cursor-pointer'  ></i>
                    <div className="flex items-center rounded-2xl px-3 w-52 py-2 gap-2 bg-gray-800  text-black">
                        <i className={`bx bx-search text-xl mr-1 text-primary-white`}></i>
                        <input
                            type="search"
                            name="search"
                            className="text-primary-white"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}