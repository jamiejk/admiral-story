import Navigation from '../sections/Navigation';
import LessonsLearned from '../sections/LessonsLearned';
import Footer from '../sections/Footer';
import { useEffect } from 'react';

export default function LessonsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navigation visible={true} />
            <main className="flex-grow pt-16">
                <LessonsLearned />
            </main>
            <Footer />
        </div>
    );
}
