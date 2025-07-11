import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface DemoFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  type: 'hotel-chain' | 'independent-hotel' | 'other';
  message: string;
}

export const DemoForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: {
      errors
    }
  } = useForm<DemoFormData>();
  const {
    toast
  } = useToast();
  const typeValue = watch('type');
  
  const onSubmit = async (data: DemoFormData) => {
    console.log('Demo form submitted:', data);
    
    try {
      const { error } = await supabase
        .from('Demo Request')
        .insert([
          {
            full_name: data.fullName,
            work_email: data.workEmail,
            company_name: data.companyName,
            company_type: data.type,
            message: data.message
          }
        ]);

      if (error) {
        console.error('Error saving demo request:', error);
        toast({
          title: "Error",
          description: "There was an error submitting your demo request. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Demo Request Submitted",
        description: "Thank you! Our team will contact you soon to schedule your demo."
      });
      
      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "There was an unexpected error. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-medium text-[#FDF6E3] mb-2">
          Request a Demo
        </h2>
        <p className="text-[#FDF6E3]/80">
          Fill out the form below and we'll be in touch
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-[#FDF6E3]">
          Full Name *
        </Label>
        <Input 
          id="fullName" 
          {...register('fullName', { required: 'Full name is required' })}
          placeholder="Enter your full name" 
          className="border-[#FDF6E3] text-[#FDF6E3] placeholder:text-gray-400"
          style={{ backgroundColor: '#ffffff14' }}
        />
        {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="workEmail" className="text-[#FDF6E3]">
          Work Email *
        </Label>
        <Input 
          id="workEmail" 
          type="email"
          {...register('workEmail', { 
            required: 'Work email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          placeholder="Enter your work email" 
          className="border-[#FDF6E3] text-[#FDF6E3] placeholder:text-gray-400"
          style={{ backgroundColor: '#ffffff14' }}
        />
        {errors.workEmail && <p className="text-red-400 text-sm">{errors.workEmail.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="companyName" className="text-[#FDF6E3]">
          Company Name *
        </Label>
        <Input 
          id="companyName" 
          {...register('companyName', { 
            required: 'Company name is required'
          })} 
          className="border-[#FDF6E3] text-[#FDF6E3] placeholder:text-gray-400" 
          placeholder="Enter your company name"
          style={{ backgroundColor: '#ffffff14' }}
        />
        {errors.companyName && <p className="text-red-400 text-sm">{errors.companyName.message}</p>}
      </div>

      <div className="space-y-2">
        <Label className="text-[#FDF6E3]">Type *</Label>
        <Select 
          value={typeValue} 
          onValueChange={(value) => setValue('type', value as DemoFormData['type'], { shouldValidate: true })}
          {...register('type', { required: 'Please select a company type' })}
        >
          <SelectTrigger className="border-[#FDF6E3] text-[#FDF6E3] bg-white/10">
            <SelectValue placeholder="Select company type" className="text-[#FDF6E3]" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border-zinc-700">
            <SelectItem value="hotel-chain" className="text-[#FDF6E3] hover:bg-zinc-800">
              Hotel Chain
            </SelectItem>
            <SelectItem value="independent-hotel" className="text-[#FDF6E3] hover:bg-zinc-800">
              Independent Hotel
            </SelectItem>
            <SelectItem value="other" className="text-[#FDF6E3] hover:bg-zinc-800">
              Other
            </SelectItem>
          </SelectContent>
        </Select>
        {errors.type && <p className="text-red-400 text-sm">{errors.type.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#FDF6E3]">
          Message
        </Label>
        <Textarea 
          id="message" 
          {...register('message')} 
          className="border-[#FDF6E3] text-[#FDF6E3] placeholder:text-gray-400 min-h-[100px]" 
          placeholder="Tell us more about your needs..."
          style={{ backgroundColor: '#ffffff14' }}
        />
      </div>

      <Button type="submit" className="w-full bg-[#FDF6E3] text-black hover:bg-[#FDF6E3]/90 font-medium py-3">
        Submit Demo Request
      </Button>
    </form>
  );
};
