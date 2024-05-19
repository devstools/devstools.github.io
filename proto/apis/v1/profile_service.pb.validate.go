// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: apis/v1/profile_service.proto

package v1

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
)

// Validate checks the field values on AuthorizeRequest with the rules defined
// in the proto definition for this message. If any rules are violated, an
// error is returned.
func (m *AuthorizeRequest) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for IdToken

	return nil
}

// AuthorizeRequestValidationError is the validation error returned by
// AuthorizeRequest.Validate if the designated constraints aren't met.
type AuthorizeRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e AuthorizeRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e AuthorizeRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e AuthorizeRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e AuthorizeRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e AuthorizeRequestValidationError) ErrorName() string { return "AuthorizeRequestValidationError" }

// Error satisfies the builtin error interface
func (e AuthorizeRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sAuthorizeRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = AuthorizeRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = AuthorizeRequestValidationError{}

// Validate checks the field values on AuthorizeResponse with the rules defined
// in the proto definition for this message. If any rules are violated, an
// error is returned.
func (m *AuthorizeResponse) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetData()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return AuthorizeResponseValidationError{
				field:  "Data",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// AuthorizeResponseValidationError is the validation error returned by
// AuthorizeResponse.Validate if the designated constraints aren't met.
type AuthorizeResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e AuthorizeResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e AuthorizeResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e AuthorizeResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e AuthorizeResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e AuthorizeResponseValidationError) ErrorName() string {
	return "AuthorizeResponseValidationError"
}

// Error satisfies the builtin error interface
func (e AuthorizeResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sAuthorizeResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = AuthorizeResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = AuthorizeResponseValidationError{}

// Validate checks the field values on GetMyProfileRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *GetMyProfileRequest) Validate() error {
	if m == nil {
		return nil
	}

	return nil
}

// GetMyProfileRequestValidationError is the validation error returned by
// GetMyProfileRequest.Validate if the designated constraints aren't met.
type GetMyProfileRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e GetMyProfileRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e GetMyProfileRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e GetMyProfileRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e GetMyProfileRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e GetMyProfileRequestValidationError) ErrorName() string {
	return "GetMyProfileRequestValidationError"
}

// Error satisfies the builtin error interface
func (e GetMyProfileRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sGetMyProfileRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = GetMyProfileRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = GetMyProfileRequestValidationError{}

// Validate checks the field values on GetMyProfileResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *GetMyProfileResponse) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetData()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return GetMyProfileResponseValidationError{
				field:  "Data",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// GetMyProfileResponseValidationError is the validation error returned by
// GetMyProfileResponse.Validate if the designated constraints aren't met.
type GetMyProfileResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e GetMyProfileResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e GetMyProfileResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e GetMyProfileResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e GetMyProfileResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e GetMyProfileResponseValidationError) ErrorName() string {
	return "GetMyProfileResponseValidationError"
}

// Error satisfies the builtin error interface
func (e GetMyProfileResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sGetMyProfileResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = GetMyProfileResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = GetMyProfileResponseValidationError{}

// Validate checks the field values on UpdateProfileRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *UpdateProfileRequest) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetProfile()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return UpdateProfileRequestValidationError{
				field:  "Profile",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// UpdateProfileRequestValidationError is the validation error returned by
// UpdateProfileRequest.Validate if the designated constraints aren't met.
type UpdateProfileRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e UpdateProfileRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e UpdateProfileRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e UpdateProfileRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e UpdateProfileRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e UpdateProfileRequestValidationError) ErrorName() string {
	return "UpdateProfileRequestValidationError"
}

// Error satisfies the builtin error interface
func (e UpdateProfileRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sUpdateProfileRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = UpdateProfileRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = UpdateProfileRequestValidationError{}

// Validate checks the field values on UpdateProfileResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *UpdateProfileResponse) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetData()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return UpdateProfileResponseValidationError{
				field:  "Data",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// UpdateProfileResponseValidationError is the validation error returned by
// UpdateProfileResponse.Validate if the designated constraints aren't met.
type UpdateProfileResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e UpdateProfileResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e UpdateProfileResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e UpdateProfileResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e UpdateProfileResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e UpdateProfileResponseValidationError) ErrorName() string {
	return "UpdateProfileResponseValidationError"
}

// Error satisfies the builtin error interface
func (e UpdateProfileResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sUpdateProfileResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = UpdateProfileResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = UpdateProfileResponseValidationError{}

// Validate checks the field values on AuthorizeResponse_Data with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *AuthorizeResponse_Data) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetProfile()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return AuthorizeResponse_DataValidationError{
				field:  "Profile",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// AuthorizeResponse_DataValidationError is the validation error returned by
// AuthorizeResponse_Data.Validate if the designated constraints aren't met.
type AuthorizeResponse_DataValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e AuthorizeResponse_DataValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e AuthorizeResponse_DataValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e AuthorizeResponse_DataValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e AuthorizeResponse_DataValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e AuthorizeResponse_DataValidationError) ErrorName() string {
	return "AuthorizeResponse_DataValidationError"
}

// Error satisfies the builtin error interface
func (e AuthorizeResponse_DataValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sAuthorizeResponse_Data.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = AuthorizeResponse_DataValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = AuthorizeResponse_DataValidationError{}

// Validate checks the field values on GetMyProfileResponse_Data with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *GetMyProfileResponse_Data) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetProfile()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return GetMyProfileResponse_DataValidationError{
				field:  "Profile",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// GetMyProfileResponse_DataValidationError is the validation error returned by
// GetMyProfileResponse_Data.Validate if the designated constraints aren't met.
type GetMyProfileResponse_DataValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e GetMyProfileResponse_DataValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e GetMyProfileResponse_DataValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e GetMyProfileResponse_DataValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e GetMyProfileResponse_DataValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e GetMyProfileResponse_DataValidationError) ErrorName() string {
	return "GetMyProfileResponse_DataValidationError"
}

// Error satisfies the builtin error interface
func (e GetMyProfileResponse_DataValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sGetMyProfileResponse_Data.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = GetMyProfileResponse_DataValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = GetMyProfileResponse_DataValidationError{}

// Validate checks the field values on UpdateProfileResponse_Data with the
// rules defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *UpdateProfileResponse_Data) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Message

	return nil
}

// UpdateProfileResponse_DataValidationError is the validation error returned
// by UpdateProfileResponse_Data.Validate if the designated constraints aren't met.
type UpdateProfileResponse_DataValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e UpdateProfileResponse_DataValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e UpdateProfileResponse_DataValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e UpdateProfileResponse_DataValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e UpdateProfileResponse_DataValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e UpdateProfileResponse_DataValidationError) ErrorName() string {
	return "UpdateProfileResponse_DataValidationError"
}

// Error satisfies the builtin error interface
func (e UpdateProfileResponse_DataValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sUpdateProfileResponse_Data.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = UpdateProfileResponse_DataValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = UpdateProfileResponse_DataValidationError{}
