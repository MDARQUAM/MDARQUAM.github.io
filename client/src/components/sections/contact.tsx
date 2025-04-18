import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
  id?: number;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formError, setFormError] = useState<string | null>(null);

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest({
        url: "/api/contact",
        method: "POST",
        body: data
      });
      return await response.json() as ContactResponse;
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent",
        description: data.message || "Thank you for your message. We'll respond as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setFormError(null);
    },
    onError: (error: any) => {
      console.error("Contact form error:", error);
      setFormError(error.message || "Failed to send your message. Please try again later.");
      
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-primary mb-12 text-center">
          Contact
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-1">
            <Card className="bg-primary text-white h-full">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-white/20">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Office</h4>
                      <p>Department of Computer Science and Engineering<br />
                      IIT Delhi Techno Park, Rajiv Gandhi Education City<br />
                      Rai, Sonepat, Haryana-131001, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-white/20">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <p>md.arquam@iiitsonepat.ac.in</p>
                      </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-white/20">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Phone</h4>
                    <p className="text-sm">Contact via institute: 01302-987910, 7496966902, 9729077477</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-3">Connect</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="bg-secondary h-full">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-6">Send a Message</h3>
                
                {formError && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertDescription>{formError}</AlertDescription>
                  </Alert>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-primary" 
                        required 
                        disabled={contactMutation.isPending}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-primary" 
                        required 
                        disabled={contactMutation.isPending}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6 space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-primary" 
                      required 
                      disabled={contactMutation.isPending}
                    />
                  </div>
                  
                  <div className="mb-6 space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-primary" 
                      required 
                      disabled={contactMutation.isPending}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-2"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
