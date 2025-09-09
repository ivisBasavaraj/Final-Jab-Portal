import { useState } from "react";
import { api } from "../../../../../utils/api";

function SectionCanAttachment({ profile }) {
    const [uploading, setUploading] = useState(false);
    const [resumeFile, setResumeFile] = useState(null);

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await api.uploadResume(formData);
            if (response.success) {
                alert('Resume uploaded successfully!');
                setResumeFile(file.name);
            }
        } catch (error) {
            alert('Failed to upload resume');
        } finally {
            setUploading(false);
        }
    };

    return (
        <>
            <div className="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                <h4 className="panel-tittle m-a0">Attach Resume</h4>
            </div>
            <div className="panel-body wt-panel-body p-a20 ">
                <div className="twm-panel-inner">
                    <p>Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.</p>
                    <div className="dashboard-cover-pic">
                        <input 
                            type="file" 
                            accept=".pdf,.doc,.docx" 
                            onChange={handleFileUpload}
                            disabled={uploading}
                            className="form-control mb-3"
                        />
                        {uploading && <p>Uploading...</p>}
                        {profile?.resume && <p>Current resume: {profile.resume}</p>}
                        {resumeFile && <p>Uploaded: {resumeFile}</p>}
                        <p>Upload Resume File size max 3 MB</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionCanAttachment;