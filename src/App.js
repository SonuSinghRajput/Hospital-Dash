
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AnatomySection from "./components/AnatomySection";
import HealthStatusCards from "./components/HealthStatusCards";
import CalendarView from "./components/CalendarView";
import ActivityChart from "./components/ActivityChart";
import SimpleAppointmentCard from "./components/SimpleAppointmentCard";
import UpcomingScheduleCard from "./components/UpcomingScheduleCard";
import "./index.css";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">     
      <Sidebar />     
      <div className="flex-1 flex flex-col overflow-auto">
        <Header />
        <div className="flex flex-col xl:flex-row gap-6 p-6">         
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-semibold">Dashboard </h2>
            <div className="flex flex-col xl:flex-row gap-6">             
              <div className="w-full xl:w-1/2">
                <AnatomySection />
              </div>
              <div className="w-full xl:w-1/2">
                <HealthStatusCards />
              </div>
            </div>
            <ActivityChart />
          </div>
          <div className="w-full xl:w-[550px] space-y-6">
            <CalendarView /> 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SimpleAppointmentCard
                title="Dentist"
                time="09:00–11:00"
                doctor="Dr. Cameron Williamson"
                icon="🦷"
                bgColor="bg-indigo-100"
                textColor="text-indigo-700"
              />

              <SimpleAppointmentCard
                title="Physiotherapy Appointment"
                time="11:00–12:00"
                doctor="Dr. Kevin Djones"
                icon="🦾"
                bgColor="bg-purple-100"
                textColor="text-purple-700"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">The Upcoming Schedule</h2>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-600">
                  On Thursday
                </h3>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  <UpcomingScheduleCard
                    title="Health checkup complete"
                    time="11:00 AM"
                    icon="🩺"
                  />

                  <UpcomingScheduleCard
                    title="Ophthalmologist"
                    time="14:00 PM"
                    icon="👁️"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-600">
                  On Saturday
                </h3>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  <UpcomingScheduleCard
                    title="Cardiologist"
                    time="12:00 AM"
                    icon="❤️"
                  />

                  <UpcomingScheduleCard
                    title="Neurologist"
                    time="16:00 PM"
                    icon="🧠"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
