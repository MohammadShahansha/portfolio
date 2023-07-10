import React from 'react';
import project1 from '../../assets/images/pro12.png'
import project2 from '../../assets/images/pro10.png'
import project3 from '../../assets/images/pro9.png'

const Project = () => {
    return (
        <div id='project' className='my-10'>
            <h2 className='text-center text-5xl text-white font-semibold mb-5 underline'>My Project</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5 p-2 md:p-5'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={project1} alt="Shoes" /></figure>

                    <div className="card-body  mt-[-20px]">
                        <div className="divider my-[-8px]"></div>
                        <div className='flex gap-2'>
                            <h2 className='font-semibold'>Project Name:</h2>
                            <p>Art & Craft School</p>
                        </div>

                        <div className="divider my-[-8px]"></div>
                        {/* <p>
                            It is a school of Art. In home has a slider anout some classes, has 6 popular top classes, has 6 top instructor and about father of arts in Bangladesh. It has three dashboar one for student, one for Instructor and one for admin. Student can enroll any of classes, Instructor add any classes and admin maintain both of them. An admin can make admin/instructor from a student or admin from a instructor and can approve or deny any classes which added by Instructor.It has also a payment system for student/normal user.
                        </p> */}
                        <div className="divider my-[-8px]"></div>
                        <div>
                            <p className='font-semibold underline'>Technologys:</p>
                            <p className='font-semibold'>
                                React Route Dom, Tailwind CSS, daisy UI, React Query, React icon, React hook form, React Awwsome icon, Firebase, mongodb, express js, Stripe and more.
                            </p>
                        </div>
                        <div className='flex gap-1 mt-[10px]'>
                            <a href="https://github.com/MohammadShahansha/artSchool-client" className='font-semibold underline'>Coad Link(Client)</a><br />
                            <a href="https://github.com/MohammadShahansha/artSchool-server" className='font-semibold underline'>Coad Link(Server)</a>
                        </div>
                        <a href="https://assignment-twelve-dfcd6.web.app/" className='font-semibold text-center'><button className=' bg-blue-900 px-16 py-3 rounded-md text-gray-300'>Live Project Link</button></a><br />
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={project3} alt="jobFeild" /></figure>

                    <div className="card-body mt-[-20px]">
                        <div className="divider my-[-8px]"></div>
                        <div className='flex gap-2'>
                            <h2 className='font-semibold'>Project Name:</h2>
                            <p>Job Feild</p>
                        </div>

                        <div className="divider my-[-8px]"></div>
                        {/* <p>
                            It is a job feild project. In home has a Banner section.Then has a job category list which has some remote and onsite job and bottom of home has a 'see all' button. If we click this button we can see all category of job. Then has a Statistic route which show a graph of some assignment and another route which name is 'Applied Job'.Here will be show all the job which jobs are applied by a applicant. And for applied, an applicant must be go into the 'job details' section and here an applicant can see all discription about each job.
                        </p> */}
                        <div className="divider my-[-8px]"></div>
                        <div>
                            <p className='font-semibold underline'>Technologys:</p>
                            <span className='font-semibold'>
                                React Router Dom, javaScript, React icon and more.
                            </span>
                        </div>
                        <div className='flex flex-col gap-3 mt-[10px]'>
                            <a href="https://github.com/MohammadShahansha/jobFeild" className='font-semibold underline'>Coad Link</a>
                        </div>
                            <a href="https://melodious-dango-dbddcc.netlify.app/" className='font-semibold text-center '><button className=' bg-blue-900 px-16 py-3 rounded-md text-gray-300'>Live Project Link</button></a><br />
                        
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={project2} alt="Project" /></figure>
                    <div className="card-body mt-[-20px]">
                        <div className="divider my-[-8px]"></div>
                        <div className='flex gap-2'>
                            <h2 className='font-semibold'>Project Name:</h2>
                            <p>TestOfFood</p>
                        </div>

                        <div className="divider my-[-8px]"></div>
                        {/* <p>
                            This is TestOfFood project. It is about some Populer Chef and Recipe. In Home section first has a benner section.And then given a chef Information section.Then given Two populer section and a resonable footer. In 'Chef Information' section each chef has a 'VIEWRECIPE' button. If we click this button we can see three recipe with discription which made by a chef. To see recipe a user must be need to login first.
                        </p> */}
                        <div className="divider my-[-8px]"></div>
                        <div>
                            <p className='font-semibold underline'>Technologys:</p>
                            <span className='font-semibold'>
                                React Router Dom, javaScript, React icon, Firebase, vercel and more.
                            </span>
                        </div>
                        <div className='flex gap-1  mt-[10px]'>
                            <a href="https://github.com/MohammadShahansha/foodRec" className='font-semibold underline'>Coad Link(Client)</a><br />
                            <a href="https://github.com/MohammadShahansha/foodRec-server" className='font-semibold underline'>Coad Link(Server)</a>

                        </div>
                        <a href=" https://for-assignment-ten.web.app" className='font-semibold w-full text-center '><button className=' bg-blue-900 px-16 py-3 rounded-md text-gray-300'>Live Project Link</button></a><br />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Project;