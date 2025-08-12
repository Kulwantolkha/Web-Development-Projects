import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}


// import React, { useCallback, useState } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Input, RTE, Select } from "..";
// import appwriteService from "../../appwrite/config";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function PostForm({ post }) {
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [dragActive, setDragActive] = useState(false);
//     const [previewImage, setPreviewImage] = useState(post?.featuredImage ? appwriteService.getFilePreview(post.featuredImage) : null);

//     const { register, handleSubmit, watch, setValue, control, getValues, formState: { errors } } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.$id || "",
//             content: post?.content || "",
//             status: post?.status || "active",
//         },
//     });

//     const navigate = useNavigate();
//     const userData = useSelector((state) => state.auth.userData);

//     const submit = async (data) => {
//         setIsSubmitting(true);
//         try {
//             if (post) {
//                 const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

//                 if (file) {
//                     appwriteService.deleteFile(post.featuredImage);
//                 }

//                 const dbPost = await appwriteService.updatePost(post.$id, {
//                     ...data,
//                     featuredImage: file ? file.$id : undefined,
//                 });

//                 if (dbPost) {
//                     navigate(`/post/${dbPost.$id}`);
//                 }
//             } else {
//                 const file = await appwriteService.uploadFile(data.image[0]);

//                 if (file) {
//                     const fileId = file.$id;
//                     data.featuredImage = fileId;
//                     const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

//                     if (dbPost) {
//                         navigate(`/post/${dbPost.$id}`);
//                     }
//                 }
//             }
//         } catch (error) {
//             console.error('Post submission failed:', error);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value
//                 .trim()
//                 .toLowerCase()
//                 .replace(/[^a-zA-Z\d\s]+/g, "-")
//                 .replace(/\s/g, "-");

//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });

//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => setPreviewImage(reader.result);
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleDrag = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         if (e.type === "dragenter" || e.type === "dragover") {
//             setDragActive(true);
//         } else if (e.type === "dragleave") {
//             setDragActive(false);
//         }
//     };

//     const handleDrop = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setDragActive(false);

//         if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//             const file = e.dataTransfer.files[0];
//             if (file.type.startsWith('image/')) {
//                 const reader = new FileReader();
//                 reader.onload = () => setPreviewImage(reader.result);
//                 reader.readAsDataURL(file);
                
//                 // Update the form with the dropped file
//                 const fileInput = document.querySelector('input[type="file"]');
//                 if (fileInput) {
//                     const dataTransfer = new DataTransfer();
//                     dataTransfer.items.add(file);
//                     fileInput.files = dataTransfer.files;
//                 }
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-[#eff6e0] via-[#aec3b0] to-[#598392] p-6">
//             {/* Header */}
//             <div className="max-w-7xl mx-auto mb-8">
//                 <div className="bg-[#01161e]/90 backdrop-blur-xl rounded-2xl p-6 border border-[#124559]/30 shadow-2xl">
//                     <h1 className="text-3xl font-bold text-[#eff6e0] mb-2 flex items-center space-x-3">
//                         <div className="w-10 h-10 bg-gradient-to-r from-[#598392] to-[#aec3b0] rounded-xl flex items-center justify-center">
//                             <span className="text-xl">
//                                 {post ? "✏️" : "📝"}
//                             </span>
//                         </div>
//                         <span>{post ? "Update Post" : "Create New Post"}</span>
//                     </h1>
//                     <p className="text-[#aec3b0] text-lg">
//                         {post ? "Make changes to your existing post" : "Share your thoughts with the world"}
//                     </p>
//                 </div>
//             </div>

//             {/* Form Container */}
//             <form onSubmit={handleSubmit(submit)} className="max-w-7xl mx-auto">
//                 <div className="grid lg:grid-cols-3 gap-8">
                    
//                     {/* Main Content - Left Side */}
//                     <div className="lg:col-span-2 space-y-6">
                        
//                         {/* Title Input */}
//                         <div className="bg-[#eff6e0]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#aec3b0]/30 shadow-lg hover:shadow-xl transition-all duration-300">
//                             <div className="group">
//                                 <label className="block text-[#01161e] font-semibold mb-3 flex items-center space-x-2">
//                                     <span className="text-lg">📰</span>
//                                     <span>Title</span>
//                                     {errors.title && <span className="text-[#598392] text-sm ml-2">* Required</span>}
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter your post title..."
//                                     className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 text-[#01161e] placeholder-[#124559]/60 focus:outline-none focus:ring-2 focus:ring-[#598392]/50 focus:border-[#598392] ${
//                                         errors.title ? 'border-[#598392]/60' : 'border-[#aec3b0]/40 hover:border-[#598392]/60'
//                                     }`}
//                                     {...register("title", { required: true })}
//                                 />
//                             </div>
//                         </div>

//                         {/* Slug Input */}
//                         <div className="bg-[#eff6e0]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#aec3b0]/30 shadow-lg hover:shadow-xl transition-all duration-300">
//                             <div className="group">
//                                 <label className="block text-[#01161e] font-semibold mb-3 flex items-center space-x-2">
//                                     <span className="text-lg">🔗</span>
//                                     <span>URL Slug</span>
//                                     {errors.slug && <span className="text-[#598392] text-sm ml-2">* Required</span>}
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="url-friendly-slug"
//                                     className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 text-[#01161e] placeholder-[#124559]/60 focus:outline-none focus:ring-2 focus:ring-[#598392]/50 focus:border-[#598392] ${
//                                         errors.slug ? 'border-[#598392]/60' : 'border-[#aec3b0]/40 hover:border-[#598392]/60'
//                                     }`}
//                                     {...register("slug", { required: true })}
//                                     onInput={(e) => {
//                                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                                     }}
//                                 />
//                             </div>
//                         </div>

//                         {/* Content Editor */}
//                         <div className="bg-[#eff6e0]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#aec3b0]/30 shadow-lg hover:shadow-xl transition-all duration-300">
//                             <label className="block text-[#01161e] font-semibold mb-4 flex items-center space-x-2">
//                                 <span className="text-lg">📄</span>
//                                 <span>Content</span>
//                             </label>
//                             <div className="bg-white/60 rounded-xl border-2 border-[#aec3b0]/40 hover:border-[#598392]/60 transition-all duration-300 overflow-hidden">
//                                 <RTE 
//                                     label="" 
//                                     name="content" 
//                                     control={control} 
//                                     defaultValue={getValues("content")} 
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Sidebar - Right Side */}
//                     <div className="space-y-6">
                        
//                         {/* Image Upload */}
//                         <div className="bg-[#eff6e0]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#aec3b0]/30 shadow-lg hover:shadow-xl transition-all duration-300">
//                             <label className="block text-[#01161e] font-semibold mb-4 flex items-center space-x-2">
//                                 <span className="text-lg">🖼️</span>
//                                 <span>Featured Image</span>
//                                 {errors.image && <span className="text-[#598392] text-sm ml-2">* Required</span>}
//                             </label>
                            
//                             {/* Drag & Drop Area */}
//                             <div
//                                 className={`relative border-2 border-dashed rounded-xl transition-all duration-300 ${
//                                     dragActive 
//                                         ? 'border-[#598392] bg-[#598392]/10' 
//                                         : 'border-[#aec3b0]/60 hover:border-[#598392]/60'
//                                 } ${previewImage ? 'p-2' : 'p-8'}`}
//                                 onDragEnter={handleDrag}
//                                 onDragLeave={handleDrag}
//                                 onDragOver={handleDrag}
//                                 onDrop={handleDrop}
//                             >
//                                 <input
//                                     type="file"
//                                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//                                     {...register("image", { required: !post })}
//                                     onChange={handleImageChange}
//                                 />
                                
//                                 {previewImage ? (
//                                     <div className="relative group">
//                                         <img
//                                             src={previewImage}
//                                             alt="Preview"
//                                             className="w-full h-48 object-cover rounded-lg shadow-md"
//                                         />
//                                         <div className="absolute inset-0 bg-[#01161e]/0 group-hover:bg-[#01161e]/60 transition-all duration-300 rounded-lg flex items-center justify-center">
//                                             <span className="text-[#eff6e0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
//                                                 Click or drag to change
//                                             </span>
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <div className="text-center">
//                                         <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#598392] to-[#aec3b0] rounded-full flex items-center justify-center">
//                                             <span className="text-2xl text-[#eff6e0]">📸</span>
//                                         </div>
//                                         <p className="text-[#124559] font-medium mb-2">Drop your image here</p>
//                                         <p className="text-[#598392] text-sm">or click to browse</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Status Select */}
//                         <div className="bg-[#eff6e0]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#aec3b0]/30 shadow-lg hover:shadow-xl transition-all duration-300">
//                             <label className="block text-[#01161e] font-semibold mb-4 flex items-center space-x-2">
//                                 <span className="text-lg">⚡</span>
//                                 <span>Status</span>
//                             </label>
//                             <select
//                                 className="w-full px-4 py-3 rounded-xl border-2 border-[#aec3b0]/40 hover:border-[#598392]/60 focus:border-[#598392] focus:outline-none focus:ring-2 focus:ring-[#598392]/50 bg-white/50 text-[#01161e] transition-all duration-300"
//                                 {...register("status", { required: true })}
//                             >
//                                 <option value="active" className="bg-white text-[#01161e]">✅ Active</option>
//                                 <option value="inactive" className="bg-white text-[#01161e]">⏸️ Inactive</option>
//                             </select>
//                         </div>

//                         {/* Submit Button */}
//                         <div className="bg-[#eff6e0]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#aec3b0]/30 shadow-lg hover:shadow-xl transition-all duration-300">
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className={`
//                                     w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300
//                                     ${post 
//                                         ? 'bg-gradient-to-r from-[#598392] to-[#124559] hover:from-[#124559] hover:to-[#01161e]' 
//                                         : 'bg-gradient-to-r from-[#124559] to-[#598392] hover:from-[#598392] hover:to-[#aec3b0]'
//                                     }
//                                     text-[#eff6e0] shadow-lg hover:shadow-xl hover:shadow-[#598392]/20
//                                     transform hover:scale-[1.02] active:scale-[0.98]
//                                     ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}
//                                     border border-[#aec3b0]/30
//                                     focus:outline-none focus:ring-2 focus:ring-[#598392]/50 focus:ring-offset-2 focus:ring-offset-transparent
//                                 `}
//                             >
//                                 {isSubmitting ? (
//                                     <span className="flex items-center justify-center space-x-3">
//                                         <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
//                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                         </svg>
//                                         <span>{post ? "Updating..." : "Publishing..."}</span>
//                                     </span>
//                                 ) : (
//                                     <span className="flex items-center justify-center space-x-3">
//                                         <span className="text-xl">{post ? "🔄" : "🚀"}</span>
//                                         <span>{post ? "Update Post" : "Publish Post"}</span>
//                                     </span>
//                                 )}
//                             </button>
//                         </div>

//                         {/* Stats Card */}
//                         <div className="bg-gradient-to-br from-[#01161e]/90 to-[#124559]/90 backdrop-blur-sm rounded-2xl p-6 border border-[#598392]/30 shadow-lg">
//                             <h3 className="text-[#eff6e0] font-semibold mb-4 flex items-center space-x-2">
//                                 <span className="text-lg">📊</span>
//                                 <span>Quick Stats</span>
//                             </h3>
//                             <div className="space-y-3">
//                                 <div className="flex justify-between text-[#aec3b0]">
//                                     <span>Characters:</span>
//                                     <span className="text-[#eff6e0] font-medium">{watch("content")?.length || 0}</span>
//                                 </div>
//                                 <div className="flex justify-between text-[#aec3b0]">
//                                     <span>Words:</span>
//                                     <span className="text-[#eff6e0] font-medium">
//                                         {watch("content")?.split(/\s+/).filter(word => word.length > 0).length || 0}
//                                     </span>
//                                 </div>
//                                 <div className="flex justify-between text-[#aec3b0]">
//                                     <span>Status:</span>
//                                     <span className={`font-medium ${watch("status") === "active" ? "text-[#aec3b0]" : "text-[#598392]"}`}>
//                                         {watch("status") === "active" ? "🟢 Ready" : "🟡 Draft"}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }