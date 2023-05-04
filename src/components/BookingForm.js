import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, number, date } from 'yup';
import { submitAPI } from "../data/api";
import ConfirmedBooking from "../components/ConfirmedBooking";
import { Check } from "../assets/icons";

const BookingForm = props => {
	const [availableOccasions, availableTimes, dispatch, state] = [props.state.availableOccasions, props.state.availableTimes, props.dispatch, props.state];

	return (
		<FormContainer
			initialValues={state}
			onSubmit={values => console.log(submitAPI(values))}
		>
			<Step
				validationSchema={object({
					date: date()
						.notOneOf([''], 'Please select a date.')
						.required('Please select a date.'),
					time: string()
						.notOneOf(['Select a time'], 'Please select a time.')
						.required('Please select a time.'),
					guests: number()
						.min(1, 'Reservations must be for at least 1 person.')
						.max(10, "Online reservations can't be made for more than 10 guests. Please call us at 555-555-5555.")
						.required("Please enter a number of guests between 1 & 10.")
				})}
			>
				<div className="container-sm">
					<h2>When will we see ya?</h2>
					<fieldset className="fullwidth">
						<label htmlFor="date" className="required">Date</label>
						<Field
							type="date"
							id="date"
							name="date"
							value={state.date}
							onChange={e => dispatch({ type: "date", value: e.target.value })}
						/>
						<ErrorMessage className="error" component="div" name="date" />
					</fieldset>
					<fieldset className="fullwidth">
						<label htmlFor="time" className="required">Time</label>
						<Field
							as="select"
							id="time"
							name="time"
						>
							<option value="Select a time">Select a time</option>
							{availableTimes.map(t => (
								<option key={t} value={t}>{t}</option>
							))}
						</Field>
						<ErrorMessage className="error" component="div" name="time" />
					</fieldset>
					<fieldset>
						<div className="col">
							<label htmlFor="guests" className="required">Number of guests</label>
							<p className="small">Choose a number between 1 & 10.</p>
						</div>
						<div className="col">
							{/* <button type="button" className="btn btn-text" onClick={() => state.guests > 1 ? dispatch({ type: "guests", value: state.guests - 1 }) : dispatch({ type: "guests", value: 1 })}>
								<Minus />
							</button> */}
							<Field
								type="number"
								id="guests"
								name="guests"
							/>
							{/* <button type="button" className="btn btn-text" onClick={() => state.guests < 10 ? dispatch({ type: "guests", value: state.guests + 1 }) : dispatch({ type: "guests", value: 10 })}>
								<Plus />
							</button> */}
						</div>
						<ErrorMessage className="error" component="div" name="guests" />
					</fieldset>
					<fieldset>
						<div className="col">
							<label>Patio or Dining Room?</label>
						</div>
						<div className="col">
								<label className="radio">
									<Field
										type="radio"
										id="patio"
										name="location"
										value="Patio"
										onChange={e => dispatch({ type: "location", value: e.target.value })}
										checked={state.location === "Patio"}
									/>
									Patio
								</label>
								<label className="radio">
									<Field
										type="radio"
										id="dining-room"
										name="location"
										value="Dining Room"
										onChange={e => dispatch({ type: "location", value: e.target.value })}
										checked={state.location === "Dining Room"}
									/>
									Dining Room
								</label>
						</div>
						<ErrorMessage className="error" component="div" name="location" />
					</fieldset>
				</div>
			</Step>
			<Step
				validationSchema={object({
					name: string().required('Please enter your name.'),
					phone: string()
						.min(10, 'Please enter your full phone number (including area code).')
						.required('Please enter your phone number.'),
					email: string().email('Invalid email address.'),
					occasion: string()
						.notOneOf(['Select an occasion'], 'Please select an occasion.')
						.required('Please select an occasion'),
				})}
			>
				<div className="container-sm">
					<h2>Give us the deets!</h2>
					<fieldset className="fullwidth">
						<label htmlFor="name" className="required">Name</label>
						<Field
							type="text"
							id="name"
							name="name"
							autoComplete="name"
							placeholder="John Smith"
						/>
						<ErrorMessage className="error" component="div" name="name" />
					</fieldset>
					<fieldset className="fullwidth">
						<label htmlFor="phone" className="required">Phone</label>
						<Field
							type="tel"
							id="phone"
							name="phone"
							autoComplete="tel"
							placeholder="000-000-0000"
						/>
						<ErrorMessage className="error" component="div" name="phone" />
					</fieldset>
					<fieldset className="fullwidth">
						<label htmlFor="email">Email</label>
						<Field
							type="email"
							id="email"
							name="email"
							autoComplete="email"
							placeholder="johnsmith@example.com"
						/>
						<ErrorMessage className="error" component="div" name="email" />
					</fieldset>
					<fieldset className="fullwidth">
						<label htmlFor="occasion" className="required">Occasion</label>
						<Field
							as="select"
							id="occasion"
							name="occasion"
						>
							<option value="Select an occasion">Select an occasion</option>
							{availableOccasions.map(option => (
								<option key={option} value={option}>{option}</option>
							))}
						</Field>
						<ErrorMessage className="error" component="div" name="occasion" />
					</fieldset>
					<fieldset className="fullwidth">
						<label htmlFor="request">Special Requests</label>
						<Field
							as="textarea"
							id="request"
							name="request"
						/>
					</fieldset>
				</div>
			</Step>
		</FormContainer>
	)
};

const FormContainer = props => {
	const [stepNumber, setStepNumber] = useState(0);
	const steps = React.Children.toArray(props.children);
	const [snapshot, setSnapshot] = useState(props.initialValues);
	const [fullDate, setFullDate] = useState()
	const [confirmation, setConfirmation] = useState(false);
	const [valid, setValid] = useState(false)
	
	const totalSteps = steps.length;
	const step = stepNumber < totalSteps ? steps[stepNumber] : steps[stepNumber-1];
	const isLastStep = stepNumber === totalSteps - 1;

	const getFullDate = date => {
		setFullDate(new Date(date))
	};

	const next = values => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

	const previous = values => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

	const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }
    if (isLastStep) {
			getFullDate(values.date);
			setSnapshot(values)
			setStepNumber(2);
			setConfirmation(true);
			submitAPI(values)
      return (props.onSubmit(values));
    } else {
			bag.setTouched({});
      next(values);
    }
  };

	return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {formik => (
				<>
					<Stepper stepNumber={stepNumber} />

					{!confirmation ? (
						<Form id="reservation">
							{step}
							<div className="container">
								<div className={`form-buttons${isLastStep ? "" : " justify-content-end"}`}>
									{stepNumber > 0 && (
										<button
											type="button"
											className="btn btn-subtle"
											onClick={() => previous(formik.values)}
											aria-label="On Click"
										>
											Back
										</button>
									)}
									<button className="btn btn-primary" disabled={!formik.isValid} type="submit">
										{isLastStep ? 'Reserve a table' : 'Next'}
									</button>
								</div>
							</div>
						</Form>
					) : (
						<ConfirmedBooking fullDate={fullDate} {...snapshot} />
					)}
				</>
      )}
    </Formik>
  );
}

const Step = ({ children }) => children;

const Stepper = props => {
	const stepNumber = props.stepNumber;

	return (
		<section id="stepper">
			<div className="container-sm">
				<section className="stepper">
					<StepperItem
						step={0}
						label="Reservation Details"
						stepNumber={stepNumber}
					/>
					<StepperItem
						step={1}
						label="Your Information"
						stepNumber={stepNumber}
					/>
					<StepperItem
						step={2}
						label="Confirmation"
						stepNumber={stepNumber}
					/>
				</section>
			</div>
		</section>
	)
}

const StepperItem = props => {
	const [label, step, stepNumber] = [props.label, props.step, props.stepNumber];

	if (step < stepNumber) {
		return (
			<div className="step complete">
				<div className="step-icon">
					<Check fill="#FFFFFF" />
				</div>
				<p className="step-label">{label}</p>
			</div>
		)
	}

	if (step === stepNumber) {
		return (
			<div className="step current">
				<div className="step-icon">
					{step + 1}
				</div>
				<p className="step-label">{label}</p>
			</div>
		)
	}

	if (step > stepNumber) {
		return (
			<div className="step">
				<div className="step-icon">
					{step + 1}
				</div>
				<p className="step-label">{label}</p>
			</div>
		)
	}
}

export default BookingForm;