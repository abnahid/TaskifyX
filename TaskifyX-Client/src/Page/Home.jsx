import FAQs from "@/Components/Home/FAQs";
import TaskBanner from "@/Components/Home/TaskBanner";
import TaskManagement from "@/Components/Home/TaskManagement";
import WhyChooseUs from "@/Components/Home/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <TaskBanner />
            <TaskManagement />
            <WhyChooseUs />
            <FAQs />
        </div>
    );
};

export default Home;