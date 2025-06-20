import { useState } from "react";
import { Users, HeartHandshake, Dumbbell, Camera, Music } from "lucide-react";

const activities = [
  {
    label: "Volunteering",
    icon: <Users className="w-5 h-5 mr-2 text-yellow-400 inline" />,
    content: (
      <>
        <div className="mb-3 font-semibold">Hermes Society (Photo/Video Dept. 2021–2023)</div>
        <p className="text-gray-300 mb-2">
          Volunteering at Hermes helped me develop strong communication skills and gave me insight into how a media and images department operates. I collaborated with creative teams and learned about visual composition and effective teamwork.
        </p>
        <div className="mb-3 font-semibold">Electric Castle (Emergency Dept.)</div>
        <p className="text-gray-300">
          As a volunteer at Electric Castle, I worked in the emergency department, helping wherever extra people were needed. I got to meet lots of interesting people and further improved my communication and teamwork skills in a dynamic environment.
        </p>
      </>
    ),
  },
  {
    label: "Fitness & Well-being",
    icon: <Dumbbell className="w-5 h-5 mr-2 text-lime-400 inline" />,
    content: (
      <p className="text-gray-300">
        I am passionate about fitness and work out regularly. Training keeps me mentally sharp and physically healthy, and I believe discipline in fitness helps in all areas of life.
      </p>
    ),
  },
  {
    label: "Art, Music & Photography",
    icon: <Camera className="w-5 h-5 mr-2 text-pink-300 inline" />,
    content: (
      <p className="text-gray-300">
        I love photography and visual arts. My mom is an artist, so I grew up surrounded by creativity—this background developed my sense of composition and aesthetics. I’m also passionate about music and enjoy exploring new genres and sounds.
      </p>
    ),
  },
];

export default function ActivitiesSection() {
  const [tab, setTab] = useState(0);

  return (
    <section id="other" className="mb-20">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">Other Activities & Interests</h2>
      <div className="flex gap-4 mb-8 flex-wrap">
        {activities.map((activity, idx) => (
          <button
            key={activity.label}
            onClick={() => setTab(idx)}
            className={`px-4 py-2 flex items-center rounded-lg font-semibold transition ${
              tab === idx
                ? "bg-purple-700 text-white shadow"
                : "bg-gray-800 text-gray-300 hover:bg-purple-700 hover:text-white"
            }`}
          >
            {activity.icon} {activity.label}
          </button>
        ))}
      </div>
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg">{activities[tab].content}</div>
    </section>
  );
}
