import React from 'react';
import { Tv, Download, MonitorPlay, Puzzle } from 'lucide-react';

const features = [
  {
    icon: <Tv className="w-8 h-8 text-pink-500" />,
    title: "Enjoy on your TV",
    description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
  },
  {
    icon: <Download className="w-8 h-8 text-pink-500" />,
    title: "Download your shows to watch offline",
    description: "Save your favorites easily and always have something to watch.",
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-pink-500" />,
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
  },
  {
    icon: <Puzzle className="w-8 h-8 text-pink-500" />,
    title: "Create profiles for kids",
    description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
  },
];

export default function ReasonsToJoin() {
  return (
    <div className="bg-black text-white mx-auto lg:max-w-6xl md:max-w-6xl px-5">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">More Reasons to Join</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#231f3f] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
