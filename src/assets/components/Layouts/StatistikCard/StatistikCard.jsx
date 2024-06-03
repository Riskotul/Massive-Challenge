import React from 'react';

const StatistikCard = ({ animalRescueImage, rescuersListedImage, animalHousesImage, adopterStatistikImage }) => {
    const animalRescueImage = "/images/HomePage/animal_resque.png";
    const rescuersListedImage = "/images/HomePage/rescuers_listed.png";
    const animalHousesImage = "/images/HomePage/animal_houses.png";
    const adopterStatistikImage = "/images/HomePage/adopter_statistik.png";

    return (
        <div>

            <div className="flex justify-center items-center mt-10">
                <div className="text-center m-10">
                    <div className="inline-block p-5 bg-[#FA9F42] rounded-full">
                        <img src={animalRescueImage} alt="Animal Rescue" className="w-24 h-24" />
                    </div>
                    <p className="text-4xl font-bold mt-2">3650+</p>
                    <span className="block text-2xl mt-2">Hewan <br /> Terselamatkan</span>
                </div>
                <div className="text-center m-10">
                    <div className="inline-block p-5 bg-[#FA9F42] rounded-full">
                        <img src={rescuersListedImage} alt="Rescuers Listed" className="w-24 h-24" />
                    </div>
                    <p className="text-4xl font-bold mt-2">1540+</p>
                    <span className="block text-2xl mt-2">Daftar <br /> Penyelamatan</span>
                </div>
                <div className="text-center m-10">
                    <div className="inline-block p-5 bg-[#FA9F42] rounded-full">
                        <img src={animalHousesImage} alt="Animal Houses" className="w-24 h-24" />
                    </div>
                    <p className="text-4xl font-bold mt-2">94+</p>
                    <span className="block text-2xl mt-2">Rumah <br /> Bagi Hewan</span>
                </div>
                <div className="text-center m-10">
                    <div className="inline-block p-5 bg-[#FA9F42] rounded-full">
                        <img src={adopterStatistikImage} alt="Adopter Satisfaction" className="w-24 h-24" />
                    </div>
                    <p className="text-4xl font-bold mt-2">100%</p>
                    <span className="block text-2xl mt-2">Kepuasan <br /> Pengadopsi </span>
                </div>
            </div>
        </div>
    );
};

export default StatistikCard;
