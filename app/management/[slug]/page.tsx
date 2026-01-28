'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Mail, Phone, Quote } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Profile Data Interface
interface ProfileData {
  name: string
  role: string
  image: string
  room: string
  biography: string[]
}

const profiles: Record<string, ProfileData> = {
  director: {
    name: 'Dr. K. Haribabu',
    role: 'Director',
    image: '/assets/images/management/director.jpg',
    room: 'Room 103, Administrative Block',
    biography: [
      "True teacher is he, who doesn't confine himself to mere teaching. He is always ambitious of learning new skills and imparting them to the deserved. His world is not just a classroom but a big society. He sets himself a role model to the others and carries them on the path of success. He extends his ability to destine the future for MANY aspirants.",
      "Here, we can be very proud to feel that Dr. K Haribabu garu , the Director of our beloved institute has proved himself as an able teacher as well as an efficient administrator. We are very fortunate to have his services for the growth of our institute and for the well being of our beloved students. Sri. Haribabu garu was born in a humble family residing in kondabalavaripalam of kakumanu mandal. Sri Nagarathaiah and Smt.Leelavathi are his noble parents. Sri. Haribabu garu was born in 1966, completed his primary education in ZP High school in chinalingayapalem. He did his B.Tech in Mechanical Engineering at Bangalore Institute of Technology. He did his M.Tech with the subject thermal power in Annamalai University.",
      "He took up teaching as his profession and joined the prestigious RVR & JC college of Engineering. He served the institution for over 18 yrs, for his research in HEAT TRANSFER he was awarded Ph.D by Andhra university. So far he has published a good number of articles in the most reputed jpournals. He attended many workshops held at home and abroad. In position as the principal he served Chebrolu Engineering College for 10 years. Here, at our KKR & KSR INSTITUTE OF TECHNOLOGY AND SCIENCES he took up the charge as the Director."
    ]
  },
  chairman: {
    name: 'Sri K. Subba Rao',
    role: 'Chairman',
    image: '/assets/images/management/chairman.jpg',
    room: 'Room 101, Administrative Block',
    biography: [
      "Philanthropist, Educationist, Visionary….. are some of the attributes which have been associated with Chairman K. Subba Rao. He was born in an agricultural family in 1972 at Vinjanampadu village and has come up in life through hard work, dedication and total commitment. He had his primary schooling at Vinjanampadu and Secondary Schooling at Ananthavarapadu village. He did his intermediate course at Hindu college and graduated from JKC College, Guntur. Later he completed his Post Graduation in Mathematics from Bhavnagar University, Gujarat.",
      "At a very young age, he proved himself as an excellent academician. The establishment of this college has fulfilled his long cherished dream of starting an Engineering College to serve the student community by offering technical education in both conventional and hi-tech disciplines of engineering with all the state-of-art facilities. His main objective is to promote an educational institution for the overall benefit of the country in general, and the state in particular. \"A person who dares to dream big and commands the ability to realize it\". Mr. SubbaRao started his professional career as a Lecturer in Mathematics. He worked at JKC College for six years. Later he worked for GSR Educational Institutions in his capacity as Executive Director, he proved himself as a man of a versatile personality with inexhaustible funds of creative ideas and undeterred perseverance. In the year 2007 he founded GSR & KKR Educational Society and established KKR & KSR Institute of Technology and Sciences in 2008 with a vision to bring out the rural talent to the forefront. He followed the foot steps of his Guru, Sri.C. Subba Rao, The former Chairman, Andhra Pradesh State Council for Higher Education, inducing innovative administrative practices, introducing modern teaching methodologies and providing International standards of infrastructure. KITS will remain as one of the best engineering colleges in India wherein he continues to put his maximum effort and avid interest in its continual development. Growth of which the prime beneficiaries will be the students."
    ]
  },
  secretary: {
    name: 'Sri Koyi Sekhar',
    role: 'Secretary',
    image: '/assets/images/management/secretary.jpg',
    room: 'Room 102, Administrative Block',
    biography: [
      "Sri Koyi Sekhar, the secretary of KKR & KSR Institute of Technology & Sciences, is the person of whose efforts are the cause for the successful journey of KKR & KSR Institute of Technology & Sciences. Sri Koyi Sekhar stands as synonym for hard work, discipline, committment and concern.",
      "Sri Koyi Sekhar began his career with his services at Avanthi Group of Instituions, Hyderabad. Later, he moved to Avanthi Engineering College, Vizag. He has assilnilated huge experience in the field of engineering studies. He has proved himself to be a successful administrator in keeping an engineering college on a track of success. Encouraged by his vast experience in this field, it struck in his mind to found a college on his own. Thus was born this reputed KKR & KSR Institute of Technolgy and Sciences.",
      "He took up task of preopening the instituion to hisnnreathe and put in Titanic efforts. He is designed as the secretary of the institution. Since then his fireless striving towards achieving perfection is remarkable. He has been with the students sharing their joys and troubles.His endeavors have proved mighty in achieving glory to the institution. Not absured to say he is one and all in success of this instituion."
    ]
  },
  principal: {
    name: 'Dr. P. Babu',
    role: 'Principal',
    image: '/assets/images/management/principalnew.jpg',
    room: 'Room 104, Administrative Block',
    biography: [
      "Dr.P.Babu, was born on 30th July in 1963 at a small village Bobbepalli in Prakasam District. He pursued his Bachelor of Engineering in Civil Engineering at the historical Andhra University and Master of Engineering in Civil Engineeirng at Annamalai University. He completed his Ph.D in CIVIL Engineering from Andhra University . He is well equipped with skills of both industry and academics. During his vast service of teaching he has trained up quite good number of students who are now enjoying bright positions. He has guided a good number of scholars in their Research Work and published various articles in National and International Journals.",
      "Dr.P.Babu plays a key role in the successful journey of KKR and KSR Institute of Technology and Sciences. He has always been a part of the innovative policies implemented for the progress of the Institute. He is a successful captain with his team of staff members in adding many glories to the institute. He ably organises the system and contributes his might for the overall development of students as well as the institute. He acted as the member of ISTE and IGS. He has served as a structural designer for public and private buildings which include Iconic Acharya Nagarjuna University, Market Yard, Panchayat Raj department, Various engineering colleges and apartments. But his passion and ambition bounded him with sentiment to work at this esteemed institute as the Principal."
    ]
  }
}

export default function ManagementProfilePage() {
  const params = useParams()
  const slug = params?.slug as string
  const profile = profiles[slug]

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-light text-slate-900 mb-4">Profile Not Found</h1>
          <Link
            href="/management"
            className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors border-b border-slate-300 hover:border-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Management
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-6">
          <Link
            href="/management"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="border-b border-transparent group-hover:border-slate-900">
              Back to Management
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Profile Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Image Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-8">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Role & Name */}
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-slate-500 font-medium">
                  {profile.role}
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight">
                  {profile.name}
                </h1>
                {/* Decorative Line */}
                <div className="pt-4">
                  <div className="w-16 h-0.5 bg-slate-900" />
                </div>
              </div>

              {/* Location Card */}
              <div className="inline-flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <MapPin className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-1">
                    Office Location
                  </p>
                  <p className="text-slate-900 font-medium">
                    {profile.room}
                  </p>
                </div>
              </div>

              {/* Biography Section */}
              <div className="pt-8">
                <div className="space-y-6">
                  {/* Section Header */}
                  <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
                    <div className="w-1 h-10 bg-slate-900 rounded-full" />
                    <h2 className="text-2xl font-light text-slate-900">
                      Biography
                    </h2>
                  </div>

                  {/* Biography Content */}
                  <div className="space-y-6">
                    {profile.biography.map((paragraph, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + (idx * 0.1),
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="text-slate-700 leading-relaxed text-base sm:text-lg"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote Callout - Optional Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 sm:p-10 bg-slate-900 rounded-2xl text-white">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-16 h-16" />
            </div>

            <div className="relative">
              <p className="text-lg sm:text-xl font-light leading-relaxed mb-4 italic">
                "Committed to excellence in education and dedicated to nurturing the next generation of leaders and innovators."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-white/30" />
                <p className="text-sm text-white/70">
                  {profile.name}, {profile.role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer Spacing */}
      <div className="h-20" />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  )
}
